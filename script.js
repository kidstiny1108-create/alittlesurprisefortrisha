/* =====================================
   BIRTHDAY WEBSITE
   COMPLETE SCRIPT
===================================== */


/* =====================================
   SCREEN SYSTEM
===================================== */

const screens =
    document.querySelectorAll(".screen");


function showScreen(screen) {

    if (!screen) {
        return;
    }

    screens.forEach(function(item) {

        item.classList.remove("active");

    });

    screen.classList.add("active");

}


/* =====================================
   MAIN SCREEN REFERENCES
===================================== */

const landingScreen =
    document.getElementById(
        "landingScreen"
    );

const whatsappScreen =
    document.getElementById(
        "whatsappScreen"
    );

const chatScreen =
    document.getElementById(
        "chatScreen"
    );

const specialScreen =
    document.getElementById(
        "specialScreen"
    );


/* =====================================
   LANDING → WHATSAPP
===================================== */

const openWhatsAppBtn =
    document.getElementById(
        "openWhatsAppBtn"
    );


if (openWhatsAppBtn) {

    openWhatsAppBtn.addEventListener(
        "click",
        function() {

            showScreen(
                whatsappScreen
            );

        }
    );

}

/* =====================================
   WHATSAPP → CHAT
===================================== */

const yourProfile =
    document.getElementById(
        "yourProfile"
    );


if (yourProfile) {

    yourProfile.addEventListener(
        "click",
        function() {

            showScreen(
                chatScreen
            );

            startChatMessages();

        }
    );

}


/* =====================================
   CHAT MESSAGE ANIMATION
===================================== */

let chatStarted = false;


function startChatMessages() {

    if (chatStarted) {

        return;

    }

    chatStarted = true;


    const messages =
        document.querySelectorAll(
            ".hidden-message"
        );


    messages.forEach(
        function(message, index) {

            setTimeout(
                function() {

                    message.classList.add(
                        "show"
                    );

                },
                700 * (index + 1)
            );

        }
    );

}


/* =====================================
   CHAT → WHATSAPP
===================================== */

const backToWhatsApp =
    document.getElementById(
        "backToWhatsApp"
    );


if (backToWhatsApp) {

    backToWhatsApp.addEventListener(
        "click",
        function() {

            showScreen(
                whatsappScreen
            );

        }
    );

}


/* =====================================
   SPECIAL MESSAGE
===================================== */

const specialMessage =
    document.querySelector(
        ".special-message"
    );


if (specialMessage) {

    specialMessage.addEventListener(
        "click",
        function() {

            showScreen(
                specialScreen
            );

        }
    );

}

/* =====================================
   PHASE 2
   CINEMATIC JOURNEY
===================================== */


/* =====================================
   SCREEN REFERENCES
===================================== */

const journeyIntroScreen =
    document.getElementById(
        "journeyIntroScreen"
    );

const musicScreen =
    document.getElementById(
        "musicScreen"
    );

const memoryScreen =
    document.getElementById(
        "memoryScreen"
    );


const startJourneyBtn =
    document.getElementById(
        "startJourneyBtn"
    );


/* =====================================
   START JOURNEY
===================================== */

if (startJourneyBtn) {

    startJourneyBtn.addEventListener(
        "click",
        function() {

            showScreen(
                journeyIntroScreen
            );

        }
    );

}


/* =====================================
   INTRO → MUSIC
===================================== */

const continueJourneyBtn =
    document.getElementById(
        "continueJourneyBtn"
    );


if (continueJourneyBtn) {

    continueJourneyBtn.addEventListener(
        "click",
        function() {

            showScreen(
                musicScreen
            );

        }
    );

}


/* =====================================
   MUSIC SYSTEM
===================================== */

const journeyMusic =
    document.getElementById(
        "journeyMusic"
    );


const playMusicBtn =
    document.getElementById(
        "playMusicBtn"
    );


const skipMusicBtn =
    document.getElementById(
        "skipMusicBtn"
    );


/* PLAY MUSIC */

if (playMusicBtn) {

    playMusicBtn.addEventListener(
        "click",
        function() {

            if (!journeyMusic) {

                showScreen(
                    memoryScreen
                );

                return;

            }


            journeyMusic.volume =
                0.5;


            journeyMusic.play()
                .then(
                    function() {

                        showScreen(
                            memoryScreen
                        );

                    }
                )
                .catch(
                    function(error) {

                        console.log(
                            "Music could not start:",
                            error
                        );

                        showScreen(
                            memoryScreen
                        );

                    }
                );

        }
    );

}


/* SKIP MUSIC */

if (skipMusicBtn) {

    skipMusicBtn.addEventListener(
        "click",
        function() {

            showScreen(
                memoryScreen
            );

        }
    );

}


/* =====================================
   PHASE 3
   MEMORY SYSTEM
===================================== */

const memoryCounter =
    document.getElementById(
        "memoryCounter"
    );

const memoryIcon =
    document.getElementById(
        "memoryIcon"
    );

const memoryLabel =
    document.getElementById(
        "memoryLabel"
    );

const memoryTitle =
    document.getElementById(
        "memoryTitle"
    );

const memoryText =
    document.getElementById(
        "memoryText"
    );

const revealText =
    document.getElementById(
        "revealText"
    );

const revealMemoryBtn =
    document.getElementById(
        "revealMemoryBtn"
    );

const memoryReveal =
    document.getElementById(
        "memoryReveal"
    );

const nextMemoryBtn =
    document.getElementById(
        "nextMemoryBtn"
    );



/* =====================================
   MEMORY DATA
===================================== */

const memories = [

    {

        icon: "✨",

        label: "A LITTLE THOUGHT",

        title:
            "Every beautiful story begins somewhere...",

        text:
            "And sometimes, the best moments begin without us even knowing it.",

        reveal:
            "Some people simply make ordinary moments feel special."

    },


    {

        icon: "🌙",

        label: "A SMALL MEMORY",

        title:
            "Some moments stay with us...",

        text:
            "Not because they were perfect, but because they made us smile.",

        reveal:
            "And those little moments are often the ones we remember the longest."

    },


    {

        icon: "💫",

        label: "ONE MORE THOUGHT",

        title:
            "And then there are people...",

        text:
            "Who somehow make a normal day feel a little more meaningful.",

        reveal:
            "Maybe that's why today deserved something a little different."

    }

];


let currentMemory = 0;


/* =====================================
   SHOW MEMORY
===================================== */

function showMemory(index) {

    if (
        !memoryCounter ||
        !memoryIcon ||
        !memoryLabel ||
        !memoryTitle ||
        !memoryText ||
        !revealText
    ) {

        return;

    }


    const memory =
        memories[index];


    memoryCounter.textContent =
        "MEMORY " +
        String(index + 1).padStart(2, "0") +
        " / " +
        String(memories.length).padStart(2, "0");


    memoryIcon.textContent =
        memory.icon;


    memoryLabel.textContent =
        memory.label;


    memoryTitle.textContent =
        memory.title;


    memoryText.textContent =
        memory.text;


    revealText.textContent =
        memory.reveal;


    if (memoryReveal) {

        memoryReveal.classList.remove(
            "show"
        );

    }


    if (revealMemoryBtn) {

        revealMemoryBtn.style.display =
            "inline-block";

        revealMemoryBtn.innerHTML =
            'Tap to reveal <span>✦</span>';

    }


    if (nextMemoryBtn) {

        nextMemoryBtn.style.display =
            "none";

        nextMemoryBtn.textContent =
            "Next Memory →";

    }


    const card =
        document.getElementById(
            "memoryCard"
        );


    if (card) {

        card.style.animation =
            "none";

        void card.offsetWidth;

        card.style.animation =
            "memoryCardIn 0.8s ease";

    }

}


/* =====================================
   REVEAL MEMORY
===================================== */

if (revealMemoryBtn) {

    revealMemoryBtn.addEventListener(
        "click",
        function() {

            if (memoryReveal) {

                memoryReveal.classList.add(
                    "show"
                );

            }


            revealMemoryBtn.style.display =
                "none";


            if (nextMemoryBtn) {

                nextMemoryBtn.style.display =
                    "inline-block";

            }

        }
    );

}


/* =====================================
   NEXT MEMORY
===================================== */

if (nextMemoryBtn) {

    nextMemoryBtn.addEventListener(
        "click",
        function() {

            currentMemory++;


            if (
                currentMemory <
                memories.length
            ) {

                showMemory(
                    currentMemory
                );

            }

      else {

    showHeartMemoryScreen();

      }

        }
    );

}

/* =====================================
   PHOTO HEART MEMORY
===================================== */

const heartMemoryScreen =
    document.getElementById(
        "heartMemoryScreen"
    );


const heartPhotoWall =
    document.getElementById(
        "heartPhotoWall"
    );


const heartMemoryHint =
    document.getElementById(
        "heartMemoryHint"
    );


/* =====================================
   YOUR 25 PHOTOS
===================================== */

const heartPhotos = [

    "heart-01.jpg",
    "heart-02.jpg",
    "heart-03.jpg",
    "heart-04.jpg",
    "heart-05.jpg",

    "heart-06.jpg",
    "heart-07.jpg",
    "heart-08.jpg",
    "heart-09.jpg",
    "heart-10.jpg",

    "heart-11.jpg",
    "heart-12.jpg",
    "heart-13.jpg",
    "heart-14.jpg",
    "heart-15.jpg",

    "heart-16.jpg",
    "heart-17.jpg",
    "heart-18.jpg",
    "heart-19.jpg",
    "heart-20.jpg",

    "heart-21.jpg",
    "heart-22.jpg",
    "heart-23.jpg",
    "heart-24.jpg",
    "heart-25.jpg",

    "heart-26.jpg",
    "heart-27.jpg",
    "heart-28.jpg",
    "heart-29.jpg",
    "heart-30.jpg",

    "heart-31.jpg",
    "heart-32.jpg",
    "heart-33.jpg",
    "heart-34.jpg",
    "heart-35.jpg",

     "heart-36.jpg",
    "heart-37.jpg",
    "heart-38.jpg",
];


/* =====================================
   REAL HEART-SHAPE POSITIONS
===================================== */

/*
   7 × 7 HEART GRID

   ■ = photo
   · = empty

   · ■ ■ · ■ ■ ·
   ■ ■ ■ ■ ■ ■ ■
   ■ ■ ■ ■ ■ ■ ■
   · ■ ■ ■ ■ ■ ·
   · · ■ ■ ■ · ·
   · · · ■ · · ·

   TOTAL = 25
*/


const heartPositions = [

    /* ================================
       ROW 1 — TWO HEART LOBES
    ================================= */

    [20, 8],
    [32, 8],
    [68, 8],
    [80, 8],


    /* ================================
       ROW 2
    ================================= */

    [14, 20],
    [26, 20],
    [38, 20],

    [62, 20],
    [74, 20],
    [86, 20],


    /* ================================
       ROW 3
    ================================= */

    [10, 32],
    [22, 32],
    [34, 32],
    [46, 32],

    [54, 32],
    [66, 32],
    [78, 32],
    [90, 32],


    /* ================================
       ROW 4 — WIDEST HEART
    ================================= */

    [10, 45],
    [22, 45],
    [34, 45],
    [46, 45],

    [58, 45],
    [70, 45],
    [82, 45],
    [90, 45],


    /* ================================
       ROW 5 — START CLOSING
    ================================= */

    [22, 58],
    [34, 58],
    [46, 58],

    [58, 58],
    [70, 58],
    [82, 58],


    /* ================================
       ROW 6
    ================================= */

    [34, 70],
    [46, 70],
    [58, 70],
    [70, 70],


    /* ================================
       ROW 7 — HEART POINT
    ================================= */

    [46, 82],
    [58, 82]

];
/* =====================================
   CREATE PHOTO HEART
===================================== */

function createHeartPhotoWall() {

    if (!heartPhotoWall) {
        return;
    }


    heartPhotoWall.innerHTML = "";


    heartPhotos.forEach(
        function(photoName, index) {

            const img =
                document.createElement(
                    "img"
                );


            img.className =
                "heart-photo";


            img.src =
                "assets/images/" +
                photoName;


            img.alt =
                "Memory " +
                (index + 1);


            const position =
                heartPositions[index];


            if (position) {

                img.style.left =
                    position[0] + "%";

                img.style.top =
                    position[1] + "%";

            }


            heartPhotoWall.appendChild(
                img
            );

        }
    );

}


/* =====================================
   SHOW PHOTO HEART
===================================== */

function showHeartMemoryScreen() {

    if (!heartMemoryScreen) {
        return;
    }


    /* Open ONLY this screen */

    showScreen(
        heartMemoryScreen
    );


    createHeartPhotoWall();


    if (heartMemoryHint) {

        heartMemoryHint.classList.remove(
            "show"
        );

    }


    const photos =
        heartPhotoWall.querySelectorAll(
            ".heart-photo"
        );


    /* =================================
       PHOTO-BY-PHOTO FADE IN
    ================================= */

    photos.forEach(
        function(photo, index) {

            setTimeout(
                function() {

                    photo.classList.add(
                        "show"
                    );

                },
                400 + (index * 230)
            );

        }
    );


    /* =================================
       FINAL HEART GLOW
    ================================= */

    const totalTime =
        400 +
        (photos.length * 230);


    setTimeout(
        function() {

            photos.forEach(
                function(photo) {

                    photo.classList.add(
                        "final-glow"
                    );

                }
            );


        },
        totalTime + 700
    );


    /* =================================
       SHOW CONTINUE MESSAGE
    ================================= */

    setTimeout(
        function() {

            if (heartMemoryHint) {

                heartMemoryHint.classList.add(
                    "show"
                );

            }

        },
        totalTime + 1600
    );

}


/* =====================================
   HEART SCREEN → SPECIAL MOMENTS
===================================== */

if (heartMemoryScreen) {

    heartMemoryScreen.addEventListener(
        "click",
        function() {

            if (
                heartMemoryHint &&
                !heartMemoryHint.classList.contains(
                    "show"
                )
            ) {

                return;

            }


            showFinalTransition();

        }
    );

}
/* =====================================
   PHASE 4
   SPECIAL MOMENTS
===================================== */

const momentsScreen =
    document.getElementById(
        "momentsScreen"
    );

const finalTransitionScreen =
    document.getElementById(
        "finalTransitionScreen"
    );

const momentsContinueBtn =
    document.getElementById(
        "momentsContinueBtn"
    );


/* =====================================
   MEMORY JOURNEY COMPLETE
===================================== */

function showFinalTransition() {

    if (momentsScreen) {

        showScreen(
            momentsScreen
        );

    }

}


/* =====================================
   SPECIAL MOMENTS → FINAL TRANSITION
===================================== */

if (momentsContinueBtn) {

    momentsContinueBtn.addEventListener(
        "click",
        function() {

            if (finalTransitionScreen) {

                showScreen(
                    finalTransitionScreen
                );

            }


            setTimeout(
                function() {

                    startBirthdayReveal();

                },
                3500
            );

        }
    );

}


/* =====================================
   PHASE 5
   GRAND BIRTHDAY REVEAL
===================================== */

const birthdayScreen =
    document.getElementById(
        "birthdayScreen"
    );

const birthdayIntro =
    document.getElementById(
        "birthdayIntro"
    );

const birthdayReveal =
    document.getElementById(
        "birthdayReveal"
    );

const finalWishBtn =
    document.getElementById(
        "finalWishBtn"
    );

const finalMessageScreen =
    document.getElementById(
        "finalMessageScreen"
    );

const birthdayMusic =
    document.getElementById(
        "birthdayMusic"
    );

const countdownScreen =
    document.getElementById(
        "countdownScreen"
    );

const birthdaySuspense =
    document.getElementById(
        "birthdaySuspense"
    );

const countdownNumber =
    document.getElementById(
        "countdownNumber"
    );

const revealFlash =
    document.getElementById(
        "revealFlash"
    );

/* =====================================
   BALLOON REVEAL REFERENCES
===================================== */

const balloonReveal =
    document.getElementById(
        "balloonReveal"
    );

const balloon =
    document.getElementById(
        "balloon"
    );

const balloonBurst =
    document.getElementById(
        "balloonBurst"
    );

/* =====================================
   START BIRTHDAY REVEAL
===================================== */

function startBirthdayReveal() {

    if (!birthdayScreen) {

        return;

    }


    showScreen(
        birthdayScreen
    );


    if (birthdayReveal) {

        birthdayReveal.classList.remove(
            "show"
        );

        birthdayReveal.style.display =
            "none";

        birthdayReveal.style.opacity =
            "0";

        birthdayReveal.style.visibility =
            "hidden";

    }


    if (birthdayIntro) {

        birthdayIntro.style.display =
            "block";

        birthdayIntro.style.opacity =
            "1";

    }


    if (countdownScreen) {

        countdownScreen.classList.remove(
            "show"
        );

    }


    setTimeout(
        function() {

            if (birthdayIntro) {

                birthdayIntro.style.display =
                    "none";

            }


            startBirthdayCountdown();

        },
        4000
    );

}


/* =====================================
   COUNTDOWN 10 → 1
   FIXED VERSION
===================================== */

function startBirthdayCountdown() {

    if (
        !countdownScreen ||
        !countdownNumber
    ) {
        return;
    }


    /* SHOW COUNTDOWN */

    countdownScreen.classList.add(
        "show"
    );


    let count = 10;

    countdownNumber.textContent =
        count;


    /* =====================================
       COUNTDOWN TIMER
    ===================================== */

    const countdownTimer =
        setInterval(
            function() {

                count--;


                if (count >= 1) {

                    countdownNumber.style.animation =
                        "none";

                    void countdownNumber.offsetWidth;

                    countdownNumber.style.animation =
                        "numberPop 0.9s ease";

                    countdownNumber.textContent =
                        count;

                }

                else {

                    clearInterval(
                        countdownTimer
                    );


                    countdownNumber.textContent =
                        "✨";


                    /* =================================
                       STEP 1 — COUNTDOWN ENDS
                    ================================= */

                    setTimeout(
                        function() {

                            countdownScreen.classList.remove(
                                "show"
                            );


                            /* =================================
                               STEP 2 — SUSPENSE
                            ================================= */

                            if (birthdaySuspense) {

                                birthdaySuspense.classList.add(
                                    "show"
                                );

                            }

                        },
                        400
                    );


                    /* =====================================
                       STEP 3 — SUSPENSE ENDS
                       BALLOON STARTS
                    ===================================== */

                    setTimeout(
                        function() {

                            if (birthdaySuspense) {

                                birthdaySuspense.classList.remove(
                                    "show"
                                );

                            }


                            if (balloonReveal) {

                                balloonReveal.classList.remove(
                                    "show",
                                    "sway",
                                    "pop"
                                );

                                balloonReveal.classList.add(
                                    "show"
                                );

                            }

                        },
                        3000
                    );


                    /* =====================================
                       STEP 4 — BALLOON SWAY
                    ===================================== */

                    setTimeout(
                        function() {

                            if (balloonReveal) {

                                balloonReveal.classList.add(
                                    "sway"
                                );

                            }

                        },
                        6300
                    );


                    /* =====================================
                       STEP 5 — BALLOON POP
                    ===================================== */

                    setTimeout(
                        function() {

                            if (balloonReveal) {

                                balloonReveal.classList.add(
                                    "pop"
                                );

                            }

                        },
                        7300
                    );


                    /* =====================================
                       STEP 6 — BIRTHDAY REVEAL
                    ===================================== */

                    setTimeout(
                        function() {


                            /* Remove balloon */

                            if (balloonReveal) {

                                balloonReveal.classList.remove(
                                    "show",
                                    "sway",
                                    "pop"
                                );

                            }


                            /* Show birthday reveal */

                            if (birthdayReveal) {

                                birthdayReveal.style.display =
                                    "block";

                                birthdayReveal.style.opacity =
                                    "1";

                                birthdayReveal.style.visibility =
                                    "visible";

                                birthdayReveal.style.pointerEvents =
                                    "auto";

                                birthdayReveal.style.transform =
                                    "scale(1)";

                                birthdayReveal.classList.add(
                                    "show"
                                );

                            }


                            /* Birthday music */

                            if (birthdayMusic) {

                                birthdayMusic.volume =
                                    0.55;

                                birthdayMusic.play()
                                    .catch(
                                        function(error) {

                                            console.log(
                                                "Birthday music unavailable:",
                                                error
                                            );

                                        }
                                    );

                            }

                        },
                        8300
                    );

                }

            },
            1000
        );

}

/* =====================================
   BIRTHDAY → FINAL MESSAGE
===================================== */

if (finalWishBtn) {

    finalWishBtn.addEventListener(
        "click",
        function() {

            if (finalMessageScreen) {

                showScreen(
                    finalMessageScreen
                );

            }

        }
    );

}


/* =====================================
   PHASE 6
   GIFT SELECTION
===================================== */

const giftScreen =
    document.getElementById(
        "giftScreen"
    );

const giftCards =
    document.querySelectorAll(
        ".gift-card"
    );

const customGiftBox =
    document.getElementById(
        "customGiftBox"
    );

const customGiftInput =
    document.getElementById(
        "customGiftInput"
    );

const confirmGiftBtn =
    document.getElementById(
        "confirmGiftBtn"
    );


let selectedGift = "";


/* =====================================
   GIFT CARD SELECTION
===================================== */

giftCards.forEach(
    function(card) {

        card.addEventListener(
            "click",
            function() {

                giftCards.forEach(
                    function(item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                card.classList.add(
                    "selected"
                );


                selectedGift =
                    card.dataset.gift;


                if (
                    selectedGift ===
                    "Something Else"
                ) {

                    if (customGiftBox) {

                        customGiftBox.classList.add(
                            "show"
                        );

                    }


                    if (customGiftInput) {

                        customGiftInput.focus();

                    }


                    if (confirmGiftBtn) {

                        confirmGiftBtn.disabled =
                            true;

                    }

                }

                else {

                    if (customGiftBox) {

                        customGiftBox.classList.remove(
                            "show"
                        );

                    }


                    if (confirmGiftBtn) {

                        confirmGiftBtn.disabled =
                            false;

                    }

                }

            }
        );

    }
);


/* =====================================
   CUSTOM GIFT INPUT
===================================== */

if (customGiftInput) {

    customGiftInput.addEventListener(
        "input",
        function() {

            if (
                selectedGift ===
                "Something Else"
            ) {

                if (confirmGiftBtn) {

                    confirmGiftBtn.disabled =
                        customGiftInput.value
                            .trim()
                            .length < 2;

                }

            }

        }
    );

}

/* =====================================
   GOOGLE SHEETS - GIFT RESPONSE
===================================== */

const GIFT_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbwDjfGHh8z_arOeolig8thOFe07kjXWz45bWf1Y7F0hroe3SeW7-qbnU_MhEQKcZPw2/exec";
/* =====================================
   PHASE 6
   GIFT CONFIRMATION
===================================== */

const giftConfirmationScreen =
    document.getElementById(
        "giftConfirmationScreen"
    );

const selectedGiftName =
    document.getElementById(
        "selectedGiftName"
    );

const selectedGiftImage =
    document.getElementById(
        "selectedGiftImage"
    );

const selectedGiftMessage =
    document.getElementById(
        "selectedGiftMessage"
    );

const giftDoneBtn =
    document.getElementById(
        "giftDoneBtn"
    );


/* =====================================
   CONFIRM GIFT
===================================== */

if (confirmGiftBtn) {

    confirmGiftBtn.addEventListener(
        "click",
        function() {

            let finalChoice =
                selectedGift;


            if (
                selectedGift ===
                "Something Else"
            ) {

                finalChoice =
                    customGiftInput
                        ? customGiftInput.value
                            .trim()
                        : "";

            }


            if (!finalChoice) {

                return;

            }


            if (selectedGiftName) {

                selectedGiftName.textContent =
                    finalChoice;

            }


            if (selectedGiftImage) {

                selectedGiftImage.innerHTML =
                    '<span class="selected-gift-emoji">🎁</span>';

            }


            if (selectedGiftMessage) {

                selectedGiftMessage.textContent =
                    "A little something, chosen just by you. ✨";

            }


            /* Chocolate */

            if (
                selectedGift ===
                "Chocolate"
            ) {

                if (selectedGiftImage) {

                    selectedGiftImage.innerHTML =
                        `
                        <img
                            src="assets/images/gift-chocolate.jpg"
                            alt="Chocolate"
                        >
                        `;

                }


                if (selectedGiftMessage) {

                    selectedGiftMessage.textContent =
                        "A little sweetness for a beautiful day. 🍫";

                }

            }


            /* Beautiful Pen */

            else if (
                selectedGift ===
                "Beautiful Pen"
            ) {

                if (selectedGiftImage) {

                    selectedGiftImage.innerHTML =
                        `
                        <img
                            src="assets/images/gift-pen.jpg"
                            alt="Beautiful Pen"
                        >
                        `;

                }


                if (selectedGiftMessage) {

                    selectedGiftMessage.textContent =
                        "Something special to keep close and use every day. 🖊️";

                }

            }


            /* Show confirmation */

            if (giftConfirmationScreen) {

                showScreen(
                    giftConfirmationScreen
                );

            }

        }
    );

}

/* =====================================
   SAVE GIFT CHOICE TO GOOGLE SHEETS
===================================== */

const sendGiftChoiceBtn =
    document.getElementById(
        "sendGiftChoiceBtn"
    );

/* =====================================
   LOCK GIFT DONE UNTIL SAVED
===================================== */

if (giftDoneBtn) {

    giftDoneBtn.disabled = true;

}

if (sendGiftChoiceBtn) {

    sendGiftChoiceBtn.addEventListener(
        "click",
        async function() {

            let giftChoice =
                selectedGift;


            if (
                selectedGift ===
                "Something Else"
            ) {

                giftChoice =
                    customGiftInput
                        ? customGiftInput.value.trim()
                        : "";

            }


            if (!giftChoice) {

                return;

            }


            const originalText =
                sendGiftChoiceBtn.textContent;


            sendGiftChoiceBtn.disabled =
                true;

            sendGiftChoiceBtn.textContent =
                "Saving...";


            try {

                await fetch(
                    GIFT_SHEET_URL,
                    {
                        method: "POST",

                        mode: "no-cors",

                        headers: {
                            "Content-Type":
                                "text/plain;charset=utf-8"
                        },

                        body: JSON.stringify({
                            gift: giftChoice
                        })
                    }
                );


                sendGiftChoiceBtn.textContent =
                    "Saved ✓";

if (giftDoneBtn) {

    giftDoneBtn.disabled = false;

}
              
                setTimeout(
                    function() {

                        sendGiftChoiceBtn.disabled =
                            false;

                        sendGiftChoiceBtn.textContent =
                            originalText;

                    },
                    2000
                );


            }

            catch (error) {

                console.error(
                    "Gift save failed:",
                    error
                );


                sendGiftChoiceBtn.disabled =
                    false;

                sendGiftChoiceBtn.textContent =
                    "Try Again";

            }

        }
    );

}

/* =====================================
   FINAL MESSAGE → GIFT SCREEN
===================================== */

const openGiftBtn =
    document.getElementById(
        "openGiftBtn"
    );


if (
    openGiftBtn &&
    giftScreen
) {

    openGiftBtn.addEventListener(
        "click",
        function() {

            showScreen(
                giftScreen
            );

        }
    );

}


/* =====================================
   PHASE 7
   FINAL GOODBYE
===================================== */

const goodbyeScreen =
    document.getElementById(
        "goodbyeScreen"
    );

const replayJourneyBtn =
    document.getElementById(
        "replayJourneyBtn"
    );

/* =====================================
   FINAL VIDEO REFERENCES
===================================== */

const finalVideoScreen =
    document.getElementById(
        "finalVideoScreen"
    );

const finalBirthdayVideo =
    document.getElementById(
        "finalBirthdayVideo"
    );
/* =====================================
   GIFT → VIDEO → GOODBYE
===================================== */

if (
    giftDoneBtn &&
    finalVideoScreen &&
    finalBirthdayVideo
) {

    giftDoneBtn.addEventListener(
        "click",
        function() {


            /* =================================
               STOP JOURNEY MUSIC
            ================================= */

            if (journeyMusic) {

                journeyMusic.pause();

                journeyMusic.currentTime =
                    0;

            }


            /* =================================
               STOP BIRTHDAY MUSIC
            ================================= */

            if (birthdayMusic) {

                birthdayMusic.pause();

                birthdayMusic.currentTime =
                    0;

            }


            /* =================================
               SHOW VIDEO SCREEN
            ================================= */

            showScreen(
                finalVideoScreen
            );


            /* Reset video */

            finalBirthdayVideo.pause();

            finalBirthdayVideo.currentTime =
                0;


            /* =================================
               PLAY VIDEO
            ================================= */

            finalBirthdayVideo.play()
                .catch(
                    function(error) {

                        console.log(
                            "Final video could not start:",
                            error
                        );

                    }
                );

        }
    );


    /* =================================
       VIDEO FINISHED
    ================================= */

    finalBirthdayVideo.addEventListener(
        "ended",
        function() {


            /* Stop video */

            finalBirthdayVideo.pause();

            finalBirthdayVideo.currentTime =
                0;


            /* =================================
               SHOW GOODBYE
            ================================= */

            showScreen(
                goodbyeScreen
            );

        }
    );

}

/* =====================================
   REPLAY JOURNEY
===================================== */

if (replayJourneyBtn) {

    replayJourneyBtn.addEventListener(
        "click",
        function() {


          /* Stop final video */

if (finalBirthdayVideo) {

    finalBirthdayVideo.pause();

    finalBirthdayVideo.currentTime =
        0;

}

            /* Stop birthday music */

            if (birthdayMusic) {

                birthdayMusic.pause();

                birthdayMusic.currentTime =
                    0;

            }


            /* Stop journey music */

            if (journeyMusic) {

                journeyMusic.pause();

                journeyMusic.currentTime =
                    0;

            }


            /* Reset birthday reveal */

            if (birthdayReveal) {

                birthdayReveal.classList.remove(
                    "show"
                );

                birthdayReveal.style.display =
                    "none";

                birthdayReveal.style.opacity =
                    "0";

                birthdayReveal.style.visibility =
                    "hidden";

                birthdayReveal.style.pointerEvents =
                    "none";

            }


            /* Reset countdown */

            if (countdownScreen) {

                countdownScreen.classList.remove(
                    "show"
                );

            }


            /* Reset birthday intro */

            if (birthdayIntro) {

                birthdayIntro.style.display =
                    "block";

                birthdayIntro.style.opacity =
                    "1";

            }


            /* Reset flash */

            if (revealFlash) {

                revealFlash.classList.remove(
                    "active"
                );

            }


            /* Reset memory */

            currentMemory = 0;

            showMemory(0);


            /* Reset chat */

            chatStarted = false;


            document
                .querySelectorAll(
                    ".hidden-message"
                )
                .forEach(
                    function(message) {

                        message.classList.remove(
                            "show"
                        );

                    }
                );


            /* Reset gift */

            selectedGift = "";


            giftCards.forEach(
                function(card) {

                    card.classList.remove(
                        "selected"
                    );

                }
            );


            if (customGiftBox) {

                customGiftBox.classList.remove(
                    "show"
                );

            }


            if (customGiftInput) {

                customGiftInput.value =
                    "";

            }


            if (confirmGiftBtn) {

                confirmGiftBtn.disabled =
                    true;

            }


            /* Reset confirmation text */

            if (selectedGiftName) {

                selectedGiftName.textContent =
                    "Your Gift";

            }


            if (selectedGiftImage) {

                selectedGiftImage.innerHTML =
                    '<span class="selected-gift-emoji">🎁</span>';

            }


            if (selectedGiftMessage) {

                selectedGiftMessage.textContent =
                    "A little something, chosen just by you. ✨";

            }


            /* Go to beginning */

            showScreen(
                landingScreen
            );

        }
    );

}

/* =====================================
   INITIAL MEMORY
===================================== */

showMemory(0);


/* =====================================
   INITIAL SCREEN
===================================== */

if (landingScreen) {

    showScreen(
        landingScreen
    );

}