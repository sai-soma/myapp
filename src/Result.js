import React from 'react'
import Pass from './Pass'
import Fail from './Fail'

export default function Calc(props) {
  if (props.marks>40) {
      return <Pass />;
    } else {
      return <Fail />;
    }
}
