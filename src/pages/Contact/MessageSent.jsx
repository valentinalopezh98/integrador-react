import React, { useEffect, useState } from 'react'
import { MessageStyled } from './MessageSentStyles';

export const MessageSent = ({show}) => {
    console.log(show);
    return (
        <MessageStyled show={show}>
            Se han enviado sus comentarios con éxito!
        </MessageStyled>
    )
}
