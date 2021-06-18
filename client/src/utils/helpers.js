export const getItemIndexes = (device, item) => {
    return {
        itemIndexDevice: device.devices.findIndex(el => el.id === item.id),
        itemIndexBasket: device.basket.findIndex(el => el.id === item.id),
    }
}
