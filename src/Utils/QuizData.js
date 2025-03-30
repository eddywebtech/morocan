export default quizData = {
  general_time_limit: 30,
  questions: [
    {
      id: 1,
      question_text: "What is the capital of France?",
      points: 10,
      media: {
        image_path: "/media/images/france.png",
        audio_path: "/media/audio/question1.mp3",
        video_path: "/media/videos/question1.mp4",
      },
      options: [
        {
          id: 1,
          option_text: "Paris",
          media: {
            image_path: "/media/images/paris.png",
            audio_path: "/media/audio/option1.mp3",
          },
          is_correct: true,
        },
        {
          id: 2,
          option_text: "Berlin",
          media: {
            image_path: "/media/images/berlin.png",
            audio_path: "/media/audio/option2.mp3",
          },
          is_correct: false,
        },
        {
          id: 3,
          option_text: "Madrid",
          media: {
            image_path: "/media/images/madrid.png",
            audio_path: "/media/audio/option3.mp3",
          },
          is_correct: false,
        },
      ],
    },
    {
      id: 2,
      question_text: "Which planet is known as the Red Planet?",
      points: 10,
      media: {
        image_path: "/media/images/mars.png",
        audio_path: "/media/audio/question2.mp3",
      },
      options: [
        {
          id: 1,
          option_text: "Mars",
          media: {
            image_path: "/media/images/mars_option.png",
          },
          is_correct: true,
        },
        {
          id: 2,
          option_text: "Jupiter",
          media: {
            image_path: "/media/images/jupiter.png",
          },
          is_correct: false,
        },
        {
          id: 3,
          option_text: "Saturn",
          media: {
            image_path: "/media/images/saturn.png",
          },
          is_correct: false,
        },
      ],
    },
    {
      id: 3,
      question_text: "Who wrote 'Hamlet'?",
      points: 10,
      media: {
        image_path: "/media/images/hamlet.png",
        audio_path: "/media/audio/question3.mp3",
      },
      options: [
        {
          id: 1,
          option_text: "William Shakespeare",
          media: {
            image_path: "/media/images/shakespeare.png",
          },
          is_correct: true,
        },
        {
          id: 2,
          option_text: "Charles Dickens",
          media: {
            image_path: "/media/images/dickens.png",
          },
          is_correct: false,
        },
        {
          id: 3,
          option_text: "Leo Tolstoy",
          media: {
            image_path: "/media/images/tolstoy.png",
          },
          is_correct: false,
        },
      ],
    },
  ],
};
