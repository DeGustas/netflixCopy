let englishVersion = {
    loginButton: "Sign in",
    mainTitle: "Unlimited movies, TV shows, and more",
    subTitle1: "Watch anywhere. Cancel anytime.",
    subTitle2: "Ready to watch? Enter your email to create or restart your membership.",
    emailButton: "Get Started >",
    gradientBoxTitle: "The Netflix you love for just BRL 20.90",
    gradientBoxP: "Get the Standard with ads plan.",
    gradientLink: "Learn More >",
    tvTitle: "Enjoy on your TV",
    tvSub1: "Watch on Smart TVs, Playstation, Xbox,",
    tvSub2: "Chromecast, Apple TV, Blu-ray players, and more.",
    pcTitle: "Watch everywhere",
    pcSub1: "Stream unlimited movies and TV shows on your",
    pcSub2: "phone, tablet, laptop, and TV.",
    kidsTitle: "Create profiles for kids",
    kidsSub1: "Send kids on adventures with their favorite",
    kidsSub2: "characters in a space made just for them free with",
    kidsSub3: "your membership",
    downloadTitle: "Download your shows to watch offline",
    downloadSub: "Watch on a plane, train, or submarine...",
    downloading: "Downloading...",
    forum: "Frequently Asked Questions",
    question1: "What is Netflix?",
    question1Res1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    question1Res2: "You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    question2: "How much does Netflix cost?",
    question2Res1: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from BRL 20.90 to BRL 59.90 a month. No extra costs, no contracts.",
    question3: "Where can i watch?",
    question3Res1: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    question3Res2: "You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    question4: "How do i cancel?",
    question4Res1: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    question5: "What can i watch on Netflix?",
    question5Res1: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    question6: "Is Netflix good for kids?",
    question6Res1: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    question6Res2: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    finalEmail: "Ready to watch? Enter your email to create or restart your membership."
};

function changeLanguage() {
    let language = document.getElementById("language_picker");
    let selectOption = language.options[language.selectedIndex].value;
    let downMatrix = document.getElementById("downloading")
    const back = document.getElementById("back");
    const buttonLogin = document.getElementById("but");
    const mainH1 = document.getElementById("mainH1");
    const mainP1 = document.getElementById("mainP1");
    const mainP2 = document.getElementById("mainP2");
    const mainBut = document.getElementById("mainBut");
    const gradientH1 = document.getElementById("gradientH1");
    const gradientP = document.getElementById("gradientP");
    const gradientA = document.getElementById("gradientA");
    const tvH1 = document.getElementById("tvH1");
    const tvP1 = document.getElementById("tvP1");
    const tvP2 = document.getElementById("tvP2");
    const pcH1 = document.getElementById("pcH1");
    const pcP1 = document.getElementById("pcP1");
    const pcP2 = document.getElementById("pcP2");
    const childH1 = document.getElementById("childH1");
    const childP1 = document.getElementById("childP1");
    const childP2 = document.getElementById("childP2");
    const childP3 = document.getElementById("childP3");
    const downH1 = document.getElementById("downH1");
    const downP1 = document.getElementById("downP1");
    const txtProgress = document.getElementById("txtProgress");
    const listH1 = document.getElementById("listH1");
    const butH1 = document.getElementById("butH1");
    const butH2 = document.getElementById("butH2");
    const butH3 = document.getElementById("butH3");
    const butH4 = document.getElementById("butH4");
    const butH5 = document.getElementById("butH5");
    const butH6 = document.getElementById("butH6");
    const r1 = document.getElementById("r1");
    const r2 = document.getElementById("r2");
    const r3 = document.getElementById("r3");
    const r4= document.getElementById("r4");
    const r5 = document.getElementById("r5");
    const r6 = document.getElementById("r6");
    const r7 = document.getElementById("r7");
    const r8 = document.getElementById("r8");
    const r9 = document.getElementById("r9");
    const r10 = document.getElementById("r10");
    const finalP = document.getElementById("finalP");
    const fimInput = document.getElementById("fimInput");
    if(selectOption == "english") {
        back.style.background = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('EnglishBackVersion.jpg')";
        buttonLogin.value = englishVersion.loginButton;
        mainH1.innerHTML = englishVersion.mainTitle;
        mainP1.innerHTML = englishVersion.subTitle1;
        mainP2.innerHTML = englishVersion.subTitle2;
        mainBut.value = englishVersion.emailButton;
        gradientH1.innerHTML = englishVersion.gradientBoxTitle;
        gradientP.innerHTML = englishVersion.gradientBoxP;
        gradientA.innerHTML = englishVersion.gradientLink;
        tvH1.innerHTML = englishVersion.tvTitle;
        tvP1.innerHTML = englishVersion.tvSub1;
        tvP2.innerHTML = englishVersion.tvSub2;
        pcH1.innerHTML = englishVersion.pcTitle;
        pcP1.innerHTML = englishVersion.pcSub1;
        pcP2.innerHTML = englishVersion.pcSub2;
        childH1.innerHTML = englishVersion.kidsTitle;
        childP1.innerHTML = englishVersion.kidsSub1;
        childP2.innerHTML = englishVersion.kidsSub2;
        childP3.innerHTML = englishVersion.kidsSub3;
        downH1.innerHTML = englishVersion.downloadTitle;
        downP1.innerHTML = englishVersion.downloadSub;
        txtProgress.innerHTML = englishVersion.downloading;
        downMatrix.style.transform = "matrix(1, 0, 0, 1, -432.000, 150.000)";
        listH1.innerHTML = englishVersion.forum;
        butH1.innerHTML = englishVersion.question1;
        butH2.innerHTML = englishVersion.question2;
        butH3.innerHTML = englishVersion.question3;
        butH4.innerHTML = englishVersion.question4;
        butH5.innerHTML = englishVersion.question5;
        butH6.innerHTML = englishVersion.question6;
        r1.innerHTML = englishVersion.question1Res1;
        r2.innerHTML = englishVersion.question1Res2;
        r3.innerHTML = englishVersion.question2Res1;
        r4.innerHTML = englishVersion.question3Res1;
        r5.innerHTML = englishVersion.question3Res2;
        r6.innerHTML = englishVersion.question4Res1;
        r7.innerHTML = englishVersion.question5Res1;
        r8.innerHTML = englishVersion.question6Res1;
        r9.innerHTML = englishVersion.question6Res2;
        finalP.innerHTML = englishVersion.finalEmail;
        fimInput.value = englishVersion.emailButton;
    } else {
        location.reload();
    };
};