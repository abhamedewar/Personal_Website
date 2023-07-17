import React, { createContext } from "react";

const GlobalData = {
  //
  // -------------------------------------About Page Data-----------------------------------------
  about: {
    url: "/",
    label: "Intro",

    // Header data common to all pages
    header: {
      logo: require("../imgs/landing/education.png"),
      menu: require("../imgs/landing/menu.png"),
      name: "Abhishri Ajit Medewar",
      degreeShort: "MSCS",
      universityShort: "ASU",
      university: "Arizona State University",
    },

    // footer data common to all pages
    footer: {
      socialMediaURLs: [
        {
          url: "https://linkedin.com/in/abhishri-medewar/",
          icon: require("../imgs/landing/linkedin.png"),
        },
        {
          url: "https://github.com/abhamedewar",
          icon: require("../imgs/landing/github.png"),
        },
        {
          url: "https://abhishri-medewar.medium.com/",
          icon: require("../imgs/landing/medium.png"),
        },
      ],
      call: "+1 (602) 621-2059",
      email: "abhishri.medewar@outlook.com",
    },

    // This is the left part of the landing page with profile picture (Looks like an ID Card)
    cardsection: {
      socialMediaURLs: [
        {
          url: "https://linkedin.com/in/abhishri-medewar/",
          icon: require("../imgs/landing/linkedin-blue.png"),
        },
        {
          url: "https://github.com/abhamedewar",
          icon: require("../imgs/landing/github.png"),
        },
        {
          url: "https://abhishri-medewar.medium.com/",
          icon: require("../imgs/landing/medium.png"),
        },
      ],
      pfp: require("../imgs/landing/pfp.jpg"),
      firstName: "Abhishri",
      lastName: "Medewar",
      degreeShort: "MSCS @ ASU",
      date: "August 2021 - May 2023",
    },

    // This is the right part of the landing page with a general welcome statement and summary
    bio: {
      bigGreet: "Hey there!!",
      intro: "I'm Abhishri, a Software Developer and a Machine Learning Engineer.",
      description: (
        <>
          <p>
            <br />
          I am a <b className="font-normal">highly skilled</b> software engineer and tech enthusiast
           with a <b className="font-normal">Masters in Computer Science</b>.
            <br />
            <br />
            With 3 years of experience in Software Development, 
            I thrive on weaving innovation through code in <b className="font-normal">software development </b>
            and the exciting realms of <b className="font-normal">machine learning </b> and 
            <b className="font-normal"> deep learning </b>. 
             <br />
             <br />
          </p>
          <p>
          I'm passionate about applied machine learning, backend development, and end-to-end product creation. 
          <b className="font-normal"> Currently seeking Full-Time Opportunities</b> as a Machine Learning Engineer /
          Software Development Engineer in the United States. If you're interested in
            hiring or just want to connect, feel free to reach out via the phone number/email provided below!
            <br />
            <br></br>
            <b className="font-semibold">Have a wonderful day!!!</b>
          </p>
        </>
      ),
    },
  },

  // -------------------------------------Resume Page Data-----------------------------------------
  resume: {
    url: "/resume",
    label: "Resume",
    summary: (
      <>

        Throughout my educational journey, I have attended over 10 different schools 
        and have moved to multiple places. This has helped me develop a strong ability
        to thrive in constantly-changing environments.
        This adaptability has been invaluable in professional settings, particularly
        when faced with demanding workloads and the need to quickly learn and  adapt to new concepts, responsibilities
        and tackling challenges outside of the comfort zone.

        <br />
        As a passionate software developer, I possess comprehensive expertise in end-to-end product development 
        and a deep understanding of the machine learning lifecycle. My proficiency lies in translating real-world
        problems into effective solutions, coupled with my strong capabilities in designing,
        building, and coding complex algorithms.

      </>
    ),
    education: [
      {
        year: "2021-2023",
        university: "Arizona State University",
        major: "Master of Computer Science",
        gpa: "3.8",
        info: ( <> I am a Master of Science in Computer Science graduate from the Arizona State University.
        <br />
         My coursework includes Machine Learning, Deep Learning
        Introduction to Artificial Intelligence, Software Requirement and Specification,
         Foundations of Algorithm, Data Intensive Systems for Machine Learning, Machine Learning Security and Fairness,
         Distributed Database Systems, </>)
      },
      {
        year: "2015-2019",
        major: "Bachelor of Computer Engineering",
        university: "Pune University",
        gpa: "3.7",
        info: (<> I obtained my  Bachelor of Technology degree in Computer Engineering from the Vishwakarma Institute of Information Technology, Pune University.
        <br />
        The relevant coursework included Data Structures and Algorithms, Design and Analysis
    of Algorithms, Database Management Systems, Software Engineering.</>),
      },
    ],
    work: [
      {
        year: "June 2022 - April 2023",
        organisation: "Intel",
        role: "Machine Learning Intern",
        detail: [
          "Implemented distributed training for video frame interpolation model and performed hyperparameter optimization. This effort led to a remarkable 40% reduction in inference time, enhancing performance significantly.",
          "Implemented CVPR-2019 paper’s regularization approach in PyTorch. This implementation significantly enhanced the temporal stability of an image restoration model, leading to improved results.",
          "Worked on reproducing State-of-the-Art research paper results, leveraged Docker for efficient training."
        ],
      },
      {
        year: "July 2018 - June 2021",
        organisation: "Tata Elxsi",
        role: "Software Engineer - Machine Learning",
        detail: [
          "Implemented State-of-the-Art region-based microbial object detector using Faster-RCNN with 98% accuracy and average inference time of 3sec/image on Jetson TX2, with image dimension of 2592x1944.",
          "Deployed an InceptionV2 and Faster-RCNN based object detector on Nvidia Jetson TX2 using Tensorflow C++ API and bazel.",
          "Worked on histogram-based contrast analysis to find the optimum imaging parameters on a multi-channel imaging system which increased the overall device performance by 100x.",
          "Implemented clustering algorithm for detecting small dust particles on camera lens, anti-reflection glass for optical system with overall accuracy of 95%.",
          "Designed techniques for auto-annotation of images to reduce the overall annotation time by 60%.",
          "Developed a web application using Flask server and Angular for seamlessly integrating regulatory authority websites(FDA, EMA), this enabled real-time extraction of up-to-date information.",
        ],
      },
      {
        year: "Sept 2021 - May 2022",
        organisation: "Arizona State University",
        role: "Graduate Service Assistant",
        detail: [
          "Worked as a graduate service assistant for the course CSE 445: Distributed Software Development and CSE 446- Software Integration and Engineering.",
          "Responsible for grading homeworks, labs and assignments of 60+ students.",
        ],
      },
      {
        year: "June 2017 - July 2017",
        organisation: "Global Super Elite(GSE)",
        role: "Software Development Engineer",
        detail: [
          "Worked on web platform development: a one-stop place for online shopping to help raise funds for NGOs.",
          "Worked on implementation of backend API’s.",
        ],
      },
    ],
  },

  // -------------------------------------Skills Page Data-----------------------------------------
  skills: {
    url: "/skills",
    label: "Skills",
    tech: [
      {
        type: "Programming Languages",
        info: "Python, C++, C",
      },
      {
        type: "Frameworks and Libraries",
        info: "PyTorch, Tensorflow, Scikit-learn, Numpy, Scipy, Pandas, Matplotlib, Seaborn, Keras, OpenCV, BeautifulSoup, FFmpeg",
      },
      {
        type: "Web Technology and Database",
        info: "React, Angular, Flask, HTML, CSS, MySQL, PostgreSQL, MongoDB, DynamoDB",
      },
      {
        type: "Operating System/Developer Tools:",
        info: "Linux, Windows, Git, Jira, VS Code, Sublime text, Visual Studio, PyCharm",
      },
      {
        type: "AWS Cloud",
        info: "S3, Amazon SageMaker, API-Gateway, Lambda",
      },
      {
        type: "Containerization",
        info: "Docker, Kubernetes",
      },
      {
        type: "Software Development Practices",
        info: "Github, Agile, Scrum, JIRA, Confluence",
      },
    ],
    soft: [
      {
      img: require("../imgs/skills/soft/problemSolving.webp"),
      type: "Problem Solving",
      info: "I worked on deployment of tensorflow based architecture on Nvidia Jetson TX2. The team was facing issues in installing and setting the OS image on Nvidia board. I worked in collaboration with the Nvidia Community Support to help solve the issue. This led to timely delivery of the product.",
      },
      {
        img: require("../imgs/skills/soft/creativity.jpg"),
        type: "Creativity",
        info: "In one of the projects I was working on involved a lot of image annotation which took 2-3 weeks of the project entire time. I worked on developing a solution for reducing the manual work involved in image annotations by implementing auto-annotation tool, this work reduced the overall annotation time by 60%.",
      },
      {
        img: require("../imgs/skills/soft/teamWork.png"),
        type: "Team Work",
        info: "At Tata Elxsi, I worked with small teams of freshers and experienced professionals and successfully accomplished all assigned tasks, even under tight deadlines. Additionally, I collaborated with cross-functional groups to seamlessly integrate machine learning model into an embedded device.",
      },
      {
        img: require("../imgs/skills/soft/Communication.webp"),
        type: "Communication",
        info: "While I was working on the Proof of Concept work at Tata Elxsi I was responsible for giving presentations related to the work to customers around the world from Eupore, United States, Germany, Japan. ",
      },
      {
        img: require("../imgs/skills/soft/time.png"),
        type: "Time Management",
        info: "At Tata Elxsi, I worked simultaneously on two projects which had strict timeline for completion. I efficiently divided my working hours and delivered all the requirements of both the projects on time.",
      },
      {
        img: require("../imgs/skills/soft/teammange.jpeg"),
        type: "Team Management",
        info: "Led a group of 3 people, working on proof of concept work at Tata Elxsi. Regularly interacted with subject matter experts to gather requirements, plan and assign tasks efficiently. The company was able to secure funding from key clients.",
      },
    ],
  },

  // -------------------------------------Projects Page Data-----------------------------------------
  projects: {
    url: "/projects",
    label: "Projects",
    projData: [
      {
        img: require("../imgs/projects/unet.webp"),
        title: "Deep Background: U-Net-Based Image Background Segmentation and Editing",
        link: "https://github.com/abhamedewar/Image-Segmentation",
        year: "",
        points: [
          `Developed U-Net based image editor enabling seamless custom background editing`,
          "Implemented U-Net architecture from scratch, achieving an impressive 98.90% accuracy (dice score) in background segmentation using the Human Segmentation Dataset",
        ],
        tech: [
        ],
      },

      {
        img: require("../imgs/projects/cnn.jpg"),
        title: "DeepLearn: Simplified CNN Training and Evaluation for Any Dataset",
        link: "https://github.com/abhamedewar/classification_networks",
        year: "",
        points: [
          `Implemented State-of-the-Art CNN architectures from scratch, such as GoogLeNet / InceptionV1, AlexNet, VGG (VGG-11,
            VGG-13, VGG-16, VGG-19), LeNet, and ResNet.`,
          `Developed a versatile custom dataloader, enabling effortless integration of any image dataset. Integrated TensorBoard for
          real-time monitoring of model training`,
          `Designed a user-friendly interface allowing easy training and evaluation of image classification models by simply specifying
          dataset path and CNN architecture type.`,
        ],
        tech: [
        ],
      },
      {
        img: require("../imgs/projects/emotion.png"),
        title: "Deep Learning Approach for Human Stress Detection",
        link: "https://github.com/abhamedewar/Stress-Detection",
        year: "",
        points: [
          `Developed custom CNN for detection of stress level (0-9) by using FER2013 dataset to identify the facial emotion of the
          person from an image and correlating the emotion percentage with stress level with 85% accuracy`,
          ` Designed set of 
          questionnaires and conducted a survey where the respondents were asked to map seven basic emotions to 
          stress level. Using this information and emotion percentage a regression model was trained to predict the 
          stress level. `
        ],
        tech: [
        ],
      },
      {
        img: require("../imgs/projects/robust.png"),
        title: "Robustness Analysis Between Vision Transformers And Fully Attentional Networks",
        link: "https://github.com/abhamedewar/Robustness-Analysis-FAN-ViT",
        year: "",
        points: [
          `Conducted white box and black box attacks to assess the robustness of vision transformers and fully attentional networks
          on Imagenet dataset`,
          `Leveraged PyTorch for attack implementation and conducted thorough experimental analysis, resulting in a research paper`,
        ],
        tech: [
        ],
      },
      {
        img: require("../imgs/projects/digit.png"),
        title: "Digit Reader: Android application for image classification",
        link: "https://github.com/abhamedewar/CSE-535-Mobile-Computing",
        year: "",
        points: [
        `Developed an Android application with 99% accuracy for real-time handwritten digit classification using a pytorch based
        custom CNN network, and implemented a Flask server for seamless integration.`
        ],
        tech: [
        ],
      },
      {
        img: require("../imgs/projects/ml.jpg"),
        title: "Everything about Machine Learning",
        link: "https://github.com/abhamedewar/everything_about_ml",
        year: "",
        points: [
          "A simple website where I write everything I read about Machine Learning.",
        ],
        tech: [
        ],
      },
    ],
  },

  // -------------------------------------Blogs Page Data-----------------------------------------
  blogs: {
    url: "/blogs",
    label: "Blogs",
    cover: require("../imgs/blog/cover.jfif"),
    // summary: `Sometimes I write blogs!!!`,
    blogData: [
      {
        img: require("../imgs/blog/mAP.png"),
        title: "Mean Average Precision (mAP) in Object Detection",
        link: "https://abhishri-medewar.medium.com/mean-average-precision-map-in-object-detection-78900922b3f0",
        label: "[Medium]",
        // info: "I explained the process of cracking the Google's android certification exam, interview and the approach for it's preparation. I also created resources for the same purpose",
      },
      {
        img: require("../imgs/blog/docker.png"),
        title: "Optimize your Deep Learning Workflow with Docker",
        link: "https://abhishri-medewar.medium.com/optimize-your-deep-learning-workflow-with-docker-4105a50c2ee5",
        label: "[Medium]",
        // info: "I touched upon the basics of docker and it's advantages. As an add on, I have also explained the process to dockerize a basic react application.",
      },
      {
        img: require("../imgs/blog/quantization.png"),
        title: "Quantization in Machine Learning: Making Big Models Smaller and Faster- An Overview",
        link: "https://abhishri-medewar.medium.com/quantization-in-machine-learning-making-big-models-smaller-and-faster-an-overview-f0be3cf1cda0",
        label: "[Medium]",
        // info: "I wrote about the workings of the blockchain technology. I also explained how your own cryptocurrency can be created by using a redis publish subscribe model for peers.",
      },
      {
        img: require("../imgs/blog/labelimg.png"),
        title: "LabelImg: The Ultimate Tool for Efficient Data Annotation",
        link: "https://abhishri-medewar.medium.com/labelimg-the-ultimate-tool-for-efficient-data-annotation-b2fea57fce83",
        label: "[Medium]",
        // info: "I wrote about the workings of the blockchain technology. I also explained how your own cryptocurrency can be created by using a redis publish subscribe model for peers.",
      },
    ],
  },

  // -------------------------------------Certification Page Data-----------------------------------------
  certifications: {
    url: "/certifications",
    label: "Papers",
    certs: [
      {
        title:
          (<><b className="font-semibold">Medewar A. A.</b>, Kavitkar S. A., (2023, June 8), Is attentional channel processing design required? Comprehensive analysis
          of robustness between vision transformers and fully attentional networks, Preprint</>),
        link: "https://arxiv.org/abs/2306.05495",
        image: require("../imgs/paper.png"),
      },
    ],
  },

  // -------------------------------------Hobbies Page Data-----------------------------------------
  hobbies: {
    url: "/hobbies",
    label: "More About Me",
    hobbyData: [
      {
        hobbyname: "Painting",
        img: require("../imgs/hobby/p4.png"),
        description:
          "",
      },
      {
        hobbyname: "Piano",
        img: require("../imgs/hobby/p4.png"),
        description:
          '',
      },
    ],
  },
};

const GlobalDataContext = createContext();

const GlobalDataProvider = ({ children }) => {
  return (
    <GlobalDataContext.Provider value={GlobalData}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export { GlobalDataContext, GlobalDataProvider };
