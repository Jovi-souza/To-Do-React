import * as checkbox from '@radix-ui/react-checkbox';
import { Trash } from "phosphor-react";
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

export const TrashIcon = styled(Trash, {
  transition: '.2s',
  "&:hover": {
    color: '$danger',
  }
})

export const TaskName = styled('p', {
  fontSize: '1.33rem',
  color: '$grayOne',

  variants: {
    isChecked: {
      checked: {
        textDecoration: "initial"
      },
      unchecked: {
        textDecoration: "line-through",
        color: "$grayThree"
      },
    }
  }
})

export const CheckRoot = styled(checkbox.Root, {
  display: 'flex',
  alignItems: "center",
  justifyContent: 'center',
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  backgroundColor: "$grayFour",
  border: "2px solid $blue",
  
  "&[data-state='checked']": {
    backgroundColor: "$PurpleDark",
    border: "2px solid $PurpleDark",
  },

  "&[data-state='unchecked']": {
    backgroundColor: "$grayFour",
  }
})

export const CheckIndicator = styled(checkbox.Indicator, {
  mt: ".30rem"
})
