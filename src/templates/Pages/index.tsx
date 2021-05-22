import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWraper from 'components/LinkWrapper'

import * as S from './styles'

const PageTemplate = () => (
  <S.Content>
    <LinkWraper href="/">
      <CloseOutline size={32} />
    </LinkWraper>

    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
        cupiditate veniam, ipsa numquam, eum, pariatur dignissimos labore quasi
        necessitatibus tempora ratione laudantium maxime voluptatum cum tempore
        blanditiis similique a? Illo?
      </p>
    </S.Body>
  </S.Content>
)

export default PageTemplate
