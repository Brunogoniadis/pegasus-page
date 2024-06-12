import { forwardRef } from 'react';
import { Container , Wrapper ,Icon} from "./styles"
import { IInputProps } from "./types"

export const Input = forwardRef <HTMLInputElement, IInputProps>(
    ({ id, label, alt, children, ...rest }, ref) => (
        <Container>
            
            <Wrapper>
                
                <div>
                    <input alt={alt} id={id} ref={ref} placeholder=' ' {...rest} />
                    <label htmlFor={id}>{label}</label>
                </div>

                <Icon>
                    {children}
                </Icon>
                
            </Wrapper>          

        </Container>
    )
)