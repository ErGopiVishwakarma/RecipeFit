import React from 'react'
import * as c from "../../Styles/SuggestedAndCommentCss";
import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';

const Comment = () => {
    return (
        <Box css={c.CommentOuter} w='100%'>
            <form>
                <Text css={c.CommentHeader} fontFamily="cotorisb">
                    Discussion & Rating
                </Text>
                <textarea
                    className="commentTextArea"
                    type="text"
                    placeholder="Leave your comment here!"
                    minH={['180px','200px','250px','300px']}
                />
                <Box css={c.InputCont}>
                    <Input
                        _focusVisible="false"
                        color="dgreen"
                        borderColor="lblack2"
                        css={c.InputCss}
                        _placeholder={{ fontFamily: "cotorisb" }}
                        type="text"
                        placeholder="Name (shown with your comment)"
                    />
                    <Input
                        css={c.InputCss}
                        _focusVisible="false"
                        color="dgreen"
                        borderColor="lblack2"
                        _placeholder={{ fontFamily: "cotorisb" }}
                        type="email"
                        placeholder="Email (used only to notify you of replies)"
                    />
                </Box>
                <Button
                    type="submit"
                    isLoading={false}
                    css={c.SubmitBtn}
                    // spinner={<h1>xfvg</h1>}
                    loadingText="Submitting"
                    spinnerPlacement="end"
                    bg="greenbtn"
                    fontFamily="hind"
                    _hover={{ bg: "greenbtnhover" }}
                >
                    Submit
                </Button>
            </form>
        </Box>
    )
}

export default Comment