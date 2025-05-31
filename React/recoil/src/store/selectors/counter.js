import {RecoilRoot , atom , selector} from 'recoil'
import {counterAtom} from '../atoms/counter'

export const evenSelector = selector({
    key : 'isEvenSelector',
    get : function ({get}) 
    {
        const currentCount = get(counterAtom);
        const isEven = (currentCount%2==0);
        return isEven;// this return can be undestood as value of this subscribed state if 
        // this changes then components subscribed to this will re-render
    }
})
// get: function ({get}) defines how to compute the value.
// const currentCount = get(counterAtom); tells Recoil that this selector depends on counterAtom. Recoil will automatically track this dependency.
// When counterAtom changes, Recoil re-evaluates evenSelector. If the returned boolean value 
// changes, any component subscribed to evenSelector will re-render.
