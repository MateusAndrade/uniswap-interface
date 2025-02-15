import styled from 'lib/styled-components'
import { PropsWithChildren } from 'react'
import { Z_INDEX } from 'theme/zIndex'

export const BodyWrapper = styled.main<BodyWrapperProps>`
  position: relative;
  margin-top: ${({ $margin }) => $margin ?? '0px'};
  max-width: ${({ $maxWidth }) => $maxWidth ?? '420px'};
  width: 100%;
  background: ${({ theme }) => theme.surface1};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${Z_INDEX.default};
`

interface BodyWrapperProps {
  $margin?: string
  $maxWidth?: string
}

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody(props: PropsWithChildren<BodyWrapperProps>) {
  return <BodyWrapper {...props} />
}
