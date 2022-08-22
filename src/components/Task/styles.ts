import { styled } from "@stitches/react"

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$grayFive',
  width: '100%',
  padding: '.5rem 1rem',
  marginBottom: '.5rem',
  border: '1px solid $grayFour',
  borderRadius: '5px',

  '& input': {
    display: 'none',
  },

  '& input + label:before': {
    content: '',
    height: '16px',
    width: '16px',
    borderRadius: '50px',
    border: '2px solid $blue',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginBottom: '4px',
    cursor: 'pointer'
  },

  '& input + label:hover:before': {
    backgroundColor: '$blue',
    borderColor: '$blueDark',
    opacity: '.70'
  },

  '& input:checked + label:before': {
    backgroundColor: '$PurpleDark',
    borderColor: '$PurpleDark'
  },

  '& input:checked + label:hover:before': {
    backgroundColor: '$Purple',
    borderColor: '$Purple',
  },
})

export const TaskName = styled('p', {
  width: 'max-content',
  fontSize: '1.33rem',
  color: '$grayOne',
})
