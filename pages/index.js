// import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
function ProfileSidebar(propriedades){
  console.log(propriedades);
  return(
    <Box>
       <img src={`https://github.com/${propriedades.githubUser}.png`} alt="foto de perfil" style={{ borderRadius:'10px'}}/>
     </Box>
  )
}

export default function Home() {
  const githubUser = 'keevlin';
  const pessoasFavoritas = [
    'bella5900g',
    'juunegreiros',
    'omariosouto',
    'peas'
  ]

  const comunidadesProgramadores = [
    'Rocketseat',
    'perifacode',
    'colab'
  ]
  return (
    <div>
    <AlurakutMenu />
  <MainGrid >
    <div className='profileArea' style={{gridArea: 'profileArea'}}>
      <ProfileSidebar githubUser={githubUser}/>
    </div>
    <div className='welcomeArea' style={{gridArea:'welcomeArea'}}>
      <Box>
        <h1 className='title'>
        Bem vindo(a), {githubUser}
        </h1>
        <OrkutNostalgicIconSet/>
      </Box>
    </div>
    <div className='profileRelationsArea' style={{gridArea:'profileRelationsArea'}}>
     <ProfileRelationsBoxWrapper>
       <h2 className='smallTitle'>Amigos Programadores(as) ({pessoasFavoritas.length})</h2>

      <ul>
        {pessoasFavoritas.map((itemAtual) => {
          return( 
            <li>
             <a href="{`/users/${itemAtual}`} key={githubUser}">
              <img src={`https://github.com/${itemAtual}.png`}/>
              <span>{itemAtual}</span>
             </a>
            </li>
          )
        })}
      </ul>
     </ProfileRelationsBoxWrapper>
     <Box>
       <h2 className='smallTitle'>Comunidades de programadores ({comunidadesProgramadores.length})</h2>

        <ul>
          {
          comunidadesProgramadores.map((itemAtual2) => {
            return(
              <li>
                <a href="{`/users/${itemAtual2}`} key={githubUser}">
                <img src={`https://github.com/${itemAtual2}.png`}/>
                <span>{itemAtual2}</span>
                </a>
              </li>
            )
          })}
        </ul>
        </comunidadesRelationsBoxWrapper>
     </Box>
    </div>
  </MainGrid>
  </div>
  )
}
