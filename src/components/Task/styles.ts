import * as RadioGroup from '@radix-ui/react-radio-group';
import { styled } from '../../styles/stitches.config';

export const Container = styled('form', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: '$grayFive',

  width: '100%',
  padding: '.5rem 1rem',
  marginBottom: '.5rem',

  border: '1px solid $grayFour',
  borderRadius: '5px',
})

export const TaskName = styled('p', {
  fontSize: '1.33rem',
  color: '$grayOne',
})

export const RadioRoot = styled(RadioGroup.Root, {
  width: 'max-content',
  height: 'max-content',
})

export const RadioItem = styled(RadioGroup.Item, {
  width: '1.75rem',
  height: '1.75rem',
  backgroundColor: "$grayFour",

  border: "2px solid $blue",
  borderRadius: "50%",

  "&[data-state='checked']": {
    backgroundColor: "$PurpleDark",
  },

  "&[data-state='unchecked']": {
    backgroundColor: "$grayFour",
  }
})
