import styled from "styled-components";

export const ContainForm = styled.div`
    display: flex;
    padding: 50px;

    form{
        display: flex;
        flex-direction: column;
        width: 1066px;
        height: 702px;
        margin: auto;
    };

    label{
        color: black;
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        font-weight: 600;
    };

    input{
        border-top-left-radius: 30px;
        border-bottom-right-radius: 30px;
        box-shadow: 2px 4px 0 rgb(90, 188, 58);
        border: 2px solid rgb(90, 188, 58);
        padding-top: 20px;
        padding-bottom: 20px;
    };

    input:focus{
        padding-left: 20px;
        font-size: 16px;
        font-weight: 600;
        border: 4px solid rgb(90, 90, 90);
        color: rgb(90, 188, 58);
        outline: none;
    }


    input::placeholder{
        color: rgb(176, 226, 159);
        padding-left: 20px;
    };
`;

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 20px;

    input{
        width: 400px;
        color: rgb(90, 90, 90);
        font-size: 16px;
        font-weight: 600;
        padding-left: 50px;
        background: none;
    };
`;

export const Row2 = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 20px;

    input{
        color: rgb(90, 90, 90);
        font-size: 16px;
        font-weight: 600;
        padding-left: 50px;
        width: 900px;
    }
`;

export const Row3 = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 20px;

    select{
        border-top-left-radius: 30px;
        border-bottom-right-radius: 30px;
        box-shadow: 2px 4px 0 rgb(90, 188, 58);
        border: 2px solid rgb(90, 188, 58);
        padding-top: 20px;
        padding-bottom: 20px;
        width: 900px;
        background: none;
        color: rgb(90, 90, 90);
        font-size: 16px;
        font-weight: 600;
    }

    select::selection{
        background: rgb(176, 226, 159);
    }

    option{
        padding-left: 50px;
    }

    option::selection{
        background: rgb(176, 226, 159);
    }
`;

export const Row4 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;

    input{
        width: 900px;
        height: 200px;
        margin-left: 50px;
        color: rgb(90, 90, 90);
        font-size: 16px;
        font-weight: 600;
        padding-left: 50px;
    }

    input::placeholder{
        display: flex;
        justify-self: flex-start;
    }
`;

export const Row5 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 20px;

    input{
        border: 2px solid rgb(90, 188, 58);
    };

    label{
        font-size: 14px;
        font-style: italic;
        font-weight: 300;
        color: rgb(90, 90, 90);
    }

    .radio{
        display: block;
        box-shadow: none;
        color: white;
        padding: 2px;
        cursor: pointer;

        &::after{
            border-radius: 50%;
            padding: 2px;
            border: 2px solid rgb(180, 180, 180);
            background: rgb(180, 180, 180);
        }

        &:hover{
            color: rgb(180, 180, 180);
            background: rgb(180, 180, 180);
        }

        &:checked{
            border: 2px solid rgb(90, 188, 58);
            background: rgb(90, 188, 58);
        }
    }
`;

export const Row6 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 20px;

    button{
        width: 150px;
        height: 50px;
        color: white;
        font-size: 18px;
        font-weight: 600;
        background: rgb(90, 188, 58);
        outline: none;
        border: 4px solid white;
        border-radius: 15px;
        box-shadow: 2px 4px 3px rgba(90, 188, 58, .3);
        cursor: pointer;
    }

    button:hover{
        color: rgb(90, 188, 58);
        background: white;
        border: 4px solid rgb(90, 188, 58)
    }

    label{
        font-size: 16px;
        font-weight: 400;

    }

    input{
        border: none;
        box-shadow: none;
    }
`;

export const Row7 = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 20px;
`;