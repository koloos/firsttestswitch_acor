# A.CO.R La React Web App
#### <i>La notice</i>

#### 1) Installation de ReactJS
---

    npx create-react-app acorapp

#### 2) Suppression des fichiers inutiles de l'application
---

Tout ce qui est fichiers liés à Webvitalis, test, styles par défaut

#### 3) Préparation structure

<u>Structure</u> : dans le dossier "src" créer le dossier Components et Pages ou autres dossiers, comme par exemple j'ai créer le dossier Accueil avec tous les components liés à la page Accueil dedans.

    ->src
    ->Components
            ->Navbar
                ->Navbar.jsx
                ->NavbarStyle.jsx
            ->Footer
                ->Footer.jsx
                ->FooterStyle.jsx
        ->Pages
            ->Home
        ->Accueil
            ->Components




    export const GlobalStyle = createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Lato', sans-serif;
            user-select: none;
        }
    `
++
#### 4) Création fichiers Navbar et Footer
---

#### 5) Création des routes dans App.js
---

Liste des routes :

    Nom : chemin de la route

    Accueil : "/"
    Actualités : "/actualites"
        Evènement : "/actualites/evenement
        Presse : "/actualites/presse"
        Blog : "/actualites/blog"
    Notre Mission : "/notremission"
    Rejoignez-nous : "/recrutement"
    Nos contacts : "/contact"
    Contactez-nous : "/mail"
    Notre Histoire : "/notrehistoire

#### 6) Création page Home avec style
---

La page Home.jsx est faîte des sections qui sont des composants.

    function Home() {
    return (
        <>
        <Container>
            <CoverHome />
            <Citation>
            "Chaque personne a sa place dans la société, nous aidons à la
            trouver."
            </Citation>
            <Territoire />
            <NotreMissionSection />
            <Actualites />
        <AccueilChiffres />
        </Container>
        </>
    )
    }

#### 7) Components
---