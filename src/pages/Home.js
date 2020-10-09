import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/photo2.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import { Title, Subtitle } from '../components/Typography'

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: #fff solid 1px;
  border-radius: 8px;
  color: #fff;
  margin: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  text-transform: uppercase;
  &:hover {
    background-color: #fff;
    color: #000;
  }

`
const Content = styled.div`
padding:7rem;`
function Home () {
  return (
    <>
      <BackgroundBlock src={backgroundImage}>
        <Title>Travel with us</Title>
        <Subtitle>checkout my amazing travleing story</Subtitle>
        <Button as='a' href='#content'>Look</Button>
      </BackgroundBlock>
      <Content id='content'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Lacus vestibulum sed arcu non odio euismod lacinia at quis. In dictum non consectetur a erat nam at. Feugiat vivamus at augue eget arcu dictum. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Arcu odio ut sem nulla pharetra diam sit amet. Amet dictum sit amet justo donec enim. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Sed euismod nisi porta lorem mollis aliquam. Quis varius quam quisque id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Nunc non blandit massa enim nec dui nunc. Faucibus turpis in eu mi bibendum neque. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.

          Leo in vitae turpis massa sed elementum. Quam vulputate dignissim suspendisse in est ante in. Id donec ultrices tincidunt arcu non sodales neque sodales. Id velit ut tortor pretium viverra suspendisse. Volutpat maecenas volutpat blandit aliquam etiam. Donec massa sapien faucibus et molestie. Ultrices eros in cursus turpis massa tincidunt dui. Lorem dolor sed viverra ipsum. Habitant morbi tristique senectus et netus. Facilisis magna etiam tempor orci eu lobortis. Leo integer malesuada nunc vel. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. A lacus vestibulum sed arcu non odio euismod lacinia. Ut sem nulla pharetra diam sit amet. Cursus mattis molestie a iaculis. Nulla facilisi morbi tempus iaculis. Turpis massa sed elementum tempus. Molestie a iaculis at erat pellentesque adipiscing. Nisl tincidunt eget nullam non nisi est sit amet facilisis.

          Malesuada bibendum arcu vitae elementum. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Lobortis feugiat vivamus at augue eget arcu. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Dolor purus non enim praesent elementum facilisis leo vel. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Faucibus scelerisque eleifend donec pretium vulputate. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Facilisis volutpat est velit egestas dui id ornare arcu. Id volutpat lacus laoreet non. Turpis nunc eget lorem dolor. Praesent tristique magna sit amet purus gravida quis blandit turpis. Velit egestas dui id ornare. Nulla pharetra diam sit amet nisl. Enim tortor at auctor urna.

          At lectus urna duis convallis. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Ut tortor pretium viverra suspendisse. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Aenean euismod elementum nisi quis eleifend quam. Quisque egestas diam in arcu cursus euismod. Neque convallis a cras semper auctor neque. Massa eget egestas purus viverra accumsan in. Maecenas sed enim ut sem. Nibh venenatis cras sed felis eget. Fermentum dui faucibus in ornare quam viverra orci. Nulla facilisi nullam vehicula ipsum. Neque egestas congue quisque egestas diam. Lectus arcu bibendum at varius vel. Proin sed libero enim sed faucibus turpis in eu.

          Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Ultricies tristique nulla aliquet enim tortor at auctor. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Tellus in metus vulputate eu scelerisque felis imperdiet. In est ante in nibh mauris. Ut tellus elementum sagittis vitae et leo duis ut. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Potenti nullam ac tortor vitae purus faucibus ornare. Senectus et netus et malesuada fames ac turpis egestas. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Non sodales neque sodales ut etiam. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Facilisi nullam vehicula ipsum a arcu cursus vitae.

          Sit amet tellus cras adipiscing enim eu turpis. Nullam non nisi est sit amet. Sed arcu non odio euismod lacinia at. Sapien faucibus et molestie ac feugiat. Orci a scelerisque purus semper. Mauris a diam maecenas sed enim ut sem. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Maecenas accumsan lacus vel facilisis volutpat. Suspendisse faucibus interdum posuere lorem ipsum dolor. Tincidunt ornare massa eget egestas. In mollis nunc sed id semper risus in hendrerit. Faucibus in ornare quam viverra. Sed nisi lacus sed viverra tellus in hac habitasse platea. In hac habitasse platea dictumst quisque sagittis purus.

          At in tellus integer feugiat scelerisque. Neque aliquam vestibulum morbi blandit. Massa placerat duis ultricies lacus sed. Sit amet consectetur adipiscing elit duis tristique. Mauris vitae ultricies leo integer malesuada nunc vel risus. Velit euismod in pellentesque massa placerat duis ultricies lacus. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Aliquet risus feugiat in ante. Sit amet mattis vulputate enim nulla. Quis commodo odio aenean sed adipiscing. Nisi est sit amet facilisis magna etiam tempor. Vitae aliquet nec ullamcorper sit. Vel pretium lectus quam id leo in vitae. Pretium quam vulputate dignissim suspendisse.

          Faucibus turpis in eu mi bibendum neque. Tempor orci dapibus ultrices in iaculis nunc sed augue. Vitae congue eu consequat ac felis. Aenean pharetra magna ac placerat vestibulum. Vitae purus faucibus ornare suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Arcu odio ut sem nulla pharetra diam sit. Bibendum at varius vel pharetra vel turpis nunc eget. Pretium lectus quam id leo. Curabitur gravida arcu ac tortor. Et malesuada fames ac turpis egestas. Convallis a cras semper auctor neque vitae tempus. Nisi vitae suscipit tellus mauris a.

          Sit amet nulla facilisi morbi tempus iaculis urna. Arcu felis bibendum ut tristique et egestas quis. Praesent elementum facilisis leo vel fringilla est ullamcorper. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Porta lorem mollis aliquam ut porttitor leo. Amet cursus sit amet dictum sit. Sagittis vitae et leo duis ut diam. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Arcu odio ut sem nulla pharetra diam sit. Eget arcu dictum varius duis at consectetur lorem donec.

          Diam donec adipiscing tristique risus nec feugiat in fermentum. Mi sit amet mauris commodo quis. Nullam eget felis eget nunc lobortis mattis aliquam. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Est placerat in egestas erat imperdiet sed euismod nisi porta. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Nunc mattis enim ut tellus elementum. Lacus sed turpis tincidunt id aliquet risus. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Felis donec et odio pellentesque diam volutpat commodo. Eu facilisis sed odio morbi quis commodo odio aenean. Ac turpis egestas sed tempus urna. Habitant morbi tristique senectus et. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.
        </p>
      </Content>
    </>
  )
}
export default Home
