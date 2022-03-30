type StorageType = 'localStorage' | 'sessionStorage'

class Storage {
  static instance?: Storage
  storage: any

  constructor(private storageType: StorageType = 'localStorage') {
    if (Storage.instance) return Storage.instance
    this.storageType = storageType
    this.init()
  }

  init() {
    this.storage = typeof window === 'undefined' ? { clear() {}, remove() {} } : window[this.storageType]
    Storage.instance = this
  }

  set(key: string, value: any): void {
    if (!key || typeof value === 'undefined') return
    const type = typeof value
    const data = {
      type,
      value,
    }
    this.storage[key] = JSON.stringify(data)
  }

  get(key: string, defaultValue: any = null) {
    if (!key || typeof defaultValue === 'undefined') return

    let data = this.storage[key] || null
    data = JSON.parse(data) || { type: typeof defaultValue, value: defaultValue }

    return data.value
  }

  clear() {
    return this.storage.clear()
  }

  remove(key: string) {
    return this.storage.removeItem(key)
  }
}

class SessionStorage extends Storage {}

export const storage = new Storage()
export const session = new SessionStorage('sessionStorage')
