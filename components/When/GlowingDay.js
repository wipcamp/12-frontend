import React, { Component } from 'react'
import styled from 'styled-components'
import { isDayNow,dayAnnouce , dayCloseRegis , dayConfirm ,dayNow, dayWip ,dayOpenRegis} from './Day'

export const OpenRegister = styled.div `
display:${ (dayOpenRegis.isBefore(dayNow) ? 'block' : 'none')};

`
export const CloseRegister= styled.div `
display:${ (dayCloseRegis.isBefore(dayNow) ? 'block' : 'none')};
`
export const Annouce = styled.div `
display:${ (dayAnnouce.isBefore(dayNow) ? 'block' : 'none')};
`
export const Confirm = styled.div `
display:${ (dayConfirm.isBefore(dayNow) ? 'block' : 'none')};

`
export const Wip = styled.div `
display:${ (dayWip.isBefore(dayNow) ? 'block' : 'none')};

`

// ใส่ display ตามวันเเล้วรอ kb มาใส่เเสง 

