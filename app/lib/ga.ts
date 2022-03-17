import ReactGA from "react-ga";

interface TrackPageViewParams {
  path: string;
}

interface TrackEventParams {
  category: string;
  action: string;
  value?: number;
  label?: string;
}

interface TrackErrorEventParams extends Omit<TrackEventParams, "category"> {}

const GA_TRACKING_ID = 'G-NTZDCTHDX5'

class GAService {
  private env: "development" | "production" | "test";

  constructor() {
    this.env = process.env.NODE_ENV;
    if (this.isProduction) {
      ReactGA.initialize(GA_TRACKING_ID);
    }
  }

  private get isProduction() {
    return this.env === "production";
  }

  public trackPageView({ path }: TrackPageViewParams) {
    const decodedPath = decodeURIComponent(path);

    if (!this.isProduction) {
      console.log(`Page Viewed: ${decodedPath}`);
      return;
    }

    ReactGA.pageview(decodedPath);
  }

  private trackEvent(params: TrackEventParams) {
    if (!this.isProduction) {
      console.log(params);
      return;
    }

    ReactGA.event(params);
  }

  public trackErrorEvent(params: TrackErrorEventParams) {
    this.trackEvent({ category: "Error", ...params });
  }
}

export const GA = new GAService();