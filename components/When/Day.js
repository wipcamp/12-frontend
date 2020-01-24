import dayjs from 'dayjs'

export const dayNow = dayjs()
export const dayOpenRegis = dayjs("2020-02-12")
export const dayCloseRegis = dayjs("2020-02-12")
export const dayAnnouce = dayjs("2020-02-12")
export const dayConfirm = dayjs("2020-02-12")
export const dayWip = dayjs("2020-02-12")

export const isDayNow = dayjs().isBefore(dayNow)
    