import { styled } from "../../styles/stitches.config";

export const MainContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  height: '74.8vh',
  backgroundColor: '$graySix',
})

export const FormContainer = styled('form', {
  mt: '-2rem'
})

export const InputText = styled('input', {
  backgroundColor: '$grayFive',
  color: '$grayOne',
  width: '40vw',
  height: '4.5rem',
  border: '1px solid transparent',
  padding: '$1',
  borderRadius: '8px',
  outline: 'none',

  '&:focus': {
    border: '1px solid $PurpleDark'
  }
})

export const Button = styled('button', {
  height: '4.5rem',
  width: '7rem',
  ml: '.3rem',
  backgroundColor: '$blueDark',
  color: '$grayOne',
  border: 'none',
  borderRadius: '8px',
  transition: '.2s',
  textAlign: 'center',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: "$blue"
  }
})

export const Container = styled('div', {
  width: '45vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const AboutTheTasks = styled('div', {
  width: '100%',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'space-between',
  mt: '4rem',
  paddingBottom: '2rem',
  fontSize: '1.5rem',
})

export const Paragraph = styled('p', {
  display: 'flex',
  alignItems: 'center',

  variants: {
    color: {
      blue: {
        color: '$blue',
      },
      purple: {
        color: '$Purple',
      },
    },
    display: {
      block: {
        display: 'block'
      }
    },
    width: {
      text: {
        width: '38rem'
      }
    }
  },
})

export const Span = styled('span', {
  ml: '1rem',
  padding: '1px 8px',
  borderRadius: '5px',
  color: '$grayTwo',
  backgroundColor: '$grayFour',
  fontSize: '1.33rem',
})

export const TaskSection = styled('section', {
  width: '100%',
  color: '$grayThree',
  fontSize: '2rem',
  borderTop: '1px solid $grayFour',
  borderRadius: '5px',
  mt: '1rem',
  padding: '3rem 0'
})

export const AlertSection = styled('div', {
  width: '100%',
  display: 'none',
  flexDirection: 'column',
  alignItems: 'center',
  color: '$grayThree',
  fontSize: '2rem',
  lineHeight: '140%',

  '& img': {
    margin: '1.5rem 0'
  }
})
