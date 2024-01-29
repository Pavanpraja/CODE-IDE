import React from 'react'
import { useContext } from 'react'
import Editor from './Editor'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { DataContext } from '../Context/DataProvider'

const Container = styled(Box)`
display: flex;
background: black;
height:33rem;
`;

function Code() {
  const{html, setHtml, css, setCss, js, setJs} = useContext(DataContext);
  return (
    <Container>
      <Editor heading="HTML" icon="/" color="red" value={html} onChange={setHtml}/>
      <Editor heading="CSS" icon="*" color="blue" value={css} onChange={setCss}/>
      <Editor heading="JAVASCRIPT" icon="()" color="yellow" value={js} onChange={setJs}/>
    </Container>
  )
}

export default Code
