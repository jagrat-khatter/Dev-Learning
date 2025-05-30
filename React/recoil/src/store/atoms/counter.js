import React from 'react'
import {RecoilRoot , atom} from 'recoil'


export const counterAtom = atom({
    key : "counter",
    default : 0
})