import styled from 'styled-components';

export const ContainCadre = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 50px 5px;
    padding: 20px;
`;

export const Cadre = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 350px;
    padding-left: 5px;
    padding-right: 5px;
    
    img{
        width: 175px;
        margin-bottom: 20px;
    };
`;

// export const PyrA = styled.div`
//         margin-left: 300px;
//         margin-right: 400px;
// `;

export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    margin-left: 60px;
`;

export const DescriptionDpt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 93px;
    border: 4px solid rgb(176, 226, 159);
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px; 
    padding-top: 15px;
    padding-bottom: 15px;

    i{
        display: flex;
        align-items: center;
        width: 40px;
        height: 40px;
        font-size: 30px;
        color: rgb(90, 188, 58);
    }

    p{
        font-size: 16px;
    }
`;

export const LinkDpt = styled.a`
    color: black;
    text-decoration: none;
`