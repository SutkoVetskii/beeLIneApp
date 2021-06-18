import { makeAutoObservable } from 'mobx'

export class DeviceStore {
    constructor() {
        this._brands = [
            { id: 1, name: 'Xiaomi' },
            { id: 2, name: 'Apple' },
        ]

        this._devices = [
            {
                id: 1,
                name: 'redmi',
                price: 40000,
                img: 'https://cdn1.ozone.ru/s3/multimedia-3/wc1200/6019317963.jpg',
                brandId: 1,
                amount: 3,
            },
            {
                id: 2,
                name: '12pro',
                price: 1100,
                img: 'https://cdn1.ozone.ru/s3/multimedia-w/wc1200/6022292708.jpg',
                brandId: 2,
                amount: 3,
            },
            {
                id: 3,
                name: 'mi10',
                price: 6000,
                img: 'https://cdn1.ozone.ru/s3/multimedia-2/wc1200/6054940754.jpg',
                brandId: 1,
                amount: 3,
            },
            {
                id: 4,
                name: '10pro',
                price: 1100,
                img: 'https://cdn1.ozone.ru/s3/multimedia-t/wc1200/6023370113.jpg',
                brandId: 2,
                amount: 3,
            },
            {
                id: 5,
                name: 'redmi',
                price: 400,
                img: 'https://cdn1.ozone.ru/s3/multimedia-3/wc1200/6019317963.jpg',
                brandId: 1,
                amount: 3,
            },
            {
                id: 6,
                name: '12pro',
                price: 1100,
                img: 'https://cdn1.ozone.ru/s3/multimedia-w/wc1200/6022292708.jpg',
                brandId: 2,
                amount: 3,
            },
            {
                id: 7,
                name: 'mi10',
                price: 6000,
                img: 'https://cdn1.ozone.ru/s3/multimedia-2/wc1200/6054940754.jpg',
                brandId: 1,
                amount: 3,
            },
            {
                id: 8,
                name: '10pro',
                price: 11000,
                img: 'https://cdn1.ozone.ru/s3/multimedia-t/wc1200/6023370113.jpg',
                brandId: 2,
                amount: 3,
            },
        ]

        this._basket = []

        this._orders = []

        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setBasket(basket) {
        this._basket = basket
    }

    setOrders(order) {
        this._orders = [...this._orders, order]
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._selectedBrand.id
            ? this._devices.filter(({ brandId }) => brandId === this._selectedBrand.id)
            : this._devices
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get basket() {
        return this._basket
    }

    get orders() {
        return this._orders
    }
}
