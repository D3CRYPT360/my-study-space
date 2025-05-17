import React from "react";

// FAQ data structure
export type FAQCategory = {
  title: string;
  questions: {
    question: string;
    answer: string | React.ReactNode;
  }[];
};

export const faqData: FAQCategory[] = [
  {
    title: "General FAQs",
    questions: [
      {
        question: "How does My Study Space work?",
        answer: (
          <>
            At My Study Space, we bring the classroom to your home. Our platform
            offers an online learning experience that mirrors a traditional
            school setting, where students interact with their teachers in
            real-time, just like they would in a physical classroom. <br /> The
            difference? It's more convenient, time-saving, engaging,
            interactive, and affordable. <br />
            <br /> With My Study Space, students can attend live classes, access
            lesson materials, complete assignments, and watch recorded
            lessons—whenever they need. Learning doesn't stop when the class is
            over. Our platform ensures that your child can revisit past lessons
            and continue their academic growth at their own pace, all while
            enjoying the flexibility and comfort of online learning.
          </>
        ),
      },
      {
        question: "Why choose Online Tuition?",
        answer: (
          <>
            <b>Recorded Classes for Revision</b>
            <br />
            Missed a class? No worries! Most online tuition sessions are
            recorded, allowing students to revisit lessons anytime for better
            understanding and revision.
            <br />
            <br />
            <b>Learn from Anywhere</b>
            <br />
            All you need is an internet connection! Attend classes from the
            comfort of your home without the hassle of traveling.
            <br />
            <br />
            <b>Affordable & Cost-Effective</b>
            <br />
            Online tuition is often more budget-friendly than physical classes
            and helps save on transportation costs.
            <br />
            <br />
            <b>Fun & Interactive Learning</b>
            <br />
            Engage with tutors through exciting tools like Desmos, PHET, Virtual
            Labs, and quiz applications for a more dynamic learning experience.
            <br />
            <br />
            Online tuition offers flexibility, affordability, and interactive
            learning—all from the comfort of your home. Upgrade your study
            experience today!
          </>
        ),
      },
      {
        question: "Which platform do you use for classes?",
        answer: (
          <>
            We have developed our <b>own learning platform</b> where students
            can join live lessons, watch previous recordings, access study
            materials, and manage their tuition payments—all in one place.
          </>
        ),
      },
      {
        question: "What devices can I use to join classes?",
        answer: (
          <>
            Our platform currently works best on laptops, desktops, and tablets.
            Mobile support will be available by the start of the 2nd term of the
            2025 academic year.
          </>
        ),
      },
      {
        question: "Do I have to join classes using google meet or zoom?",
        answer: (
          <>
            Our classes are hosted on Zoom, so you will need to have the Zoom
            application installed on your device. To ensure a smooth experience,
            please download Zoom before your first class.
            <br />
            <br />
            You can download it from:
            <br />
            <a
              href="https://zoom.us/download"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Zoom Download Page (for Windows and Mac)
            </a>
            <br />
            <a
              href="https://itunes.apple.com/us/app/id546505307"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              App Store (for iOS devices)
            </a>
            <br />
            <a
              href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Google Play Store (for Android devices)
            </a>
            <br />
            <br />
            Once installed, you'll be ready to join your classes without any
            issues!
          </>
        ),
      },
      {
        question: "Can I join in the middle of the month?",
        answer: (
          <>
            Yes, you can! If you join in the middle of the month, you'll{" "}
            <b>only be charged for the remaining classes</b>, depending on which
            week you join. This applies to all courses, including the Algebra
            Crash Course. Lesson recordings are available to help you catch up
            comfortably at your own pace.
          </>
        ),
      },
      {
        question:
          "Can I join the Algebra Crash Course in the middle of the month?",
        answer: (
          <>
            Absolutely! The <b>Algebra Crash Course</b>, taught exclusively by{" "}
            <b>Mahil Sir</b>, is designed to build a strong foundation in
            algebra before moving on to more advanced topics.
            <br />
            <br />
            You can join at any time during the course period (which runs for
            two months). If you're joining late, don't worry — you'll be able to{" "}
            <b>catch up easily</b> using the <b>lesson recordings</b>, and
            you'll <b>only be charged for the remaining classes</b>, not the
            full month.
          </>
        ),
      },
      {
        question: "What are the fees?",
        answer: (
          <>
            <ul>
              <li>
                • <b>Grades 9 & 10</b>: MVR 299 per subject per month
              </li>
              <li>
                • <b>Algebra Crash Course</b>: MVR 349 per month
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "Are classes held during holidays?",
        answer: (
          <>
            No, regular classes are <b>not held</b> during public holidays or
            school term breaks. However, special classes like the{" "}
            <b>Algebra Crash Course</b> may take place during term breaks. We
            believe holidays are a good time for both students and teachers to
            refresh before resuming lessons.
          </>
        ),
      },
    ],
  },
  {
    title: "Registration FAQs",
    questions: [
      {
        question: "How do I register?",
        answer: (
          <>
            Registering for <b>My Study Space</b> is quick and easy—just like
            signing up for your favorite social media apps like Instagram!
            <br />
            <br />
            To get started, simply head over to our{" "}
            <a
              href="https://app.mystudyspace.mv/auth2CreateProfileUpdate"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              registration portal
            </a>
            , and create you account.
            <br />
            <br />
            You can use <b>any device</b> to register (phone, tablet, or
            laptop), but <b>please note</b> that classes can currently only be
            joined from <b>laptops or tablets</b>, as our platform is not yet
            supported on phones for class viewing.
            <br />
            <br />
            When registering, make sure to use a{" "}
            <b>valid student or parent email address</b>. This is important
            because it will be used for password recovery in case you ever
            forget your login details.
            <br />
            <br />
            After you've completed registration and paid for the subjects you've
            selected, your account will go through a short{" "}
            <b>verification process</b>. This usually takes{" "}
            <b>less than an hour</b>, so please check back within that time.
            Once verified, you'll gain full access to your classes, lesson
            recordings, worksheets, and all other learning resources.
            <br />
            <br />
            If you need any assistance during the registration process, don't
            hesitate to reach out! You can{" "}
            <b>message us on Telegram by clicking</b>{" "}
            <a
              href="https://t.me/mystudyspacemv"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              here
            </a>
            , or give us a call at <b>7572910</b> — we're always happy to help!
          </>
        ),
      },
      {
        question: "Is there a registration fee?",
        answer: (
          <>
            No, there is <b>no registration fee</b>. You can create an account
            and get started without any additional charges beyond the monthly
            tuition fee.
          </>
        ),
      },
    ],
  },
  {
    title: "Fee FAQs",
    questions: [
      {
        question: "What are the fees?",
        answer: (
          <>
            <ul>
              <li>
                • <b>Grades 9 & 10</b>: MVR 299 per subject per month
              </li>
              <li>
                • <b>Algebra Crash Course</b>: MVR 349 per month
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "How do I pay the monthly fee?",
        answer: (
          <>
            You can pay directly from your My Study Space account using your
            phone, tablet, or laptop.
            <br />
            <br />
            1. Log in with the same email and password used during registration.
            <br />
            2. Click on <b>"Continue to Payment"</b>.
            <br />
            3. Reselect your subjects or add new ones.
            <br />
            4. Upload your payment slip after the transfer.
            <br />
            <br />
            <b>Note:</b> If you've already made payment for the month, it will
            show “Enroll in More Classes” instead of the payment option.
            <br />
            <br />
            <b>Important:</b> We only accept payment slips uploaded through the
            My Study Space platform. We <b>cannot</b> process slips sent through
            Viber, Telegram, Instagram, Messenger, or any other apps.
          </>
        ),
      },
      {
        question: "When do I need to pay the monthly fee?",
        answer: (
          <>
            Your monthly fee should be paid between the{" "}
            <b>1st and 7th of each month</b> through your My Study Space
            account.
            <br />
            <br />
            If payment is not made by the <b>7th</b>, your account will be
            temporarily suspended on the <b>8th</b>. If your payment slip is
            rejected due to incorrect details, please correct and re-upload it
            before or on the <b>7th</b> to avoid any disruptions to your
            classes.
          </>
        ),
      },
      {
        question: "Do you offer a package for all subjects?",
        answer: (
          <>
            Currently, we do not offer a package for all subjects. Students can
            select and pay for the subjects they wish to take individually.
          </>
        ),
      },
      {
        question: "Are there fines for late payments?",
        answer: (
          <>
            We do not impose any fines for late payments. However, if the
            monthly fee is not paid on time, the account will be{" "}
            <b>temporarily suspended</b> until the payment is cleared. To avoid
            any interruptions in accessing classes and learning materials, we
            recommend making payments within the <b>1st to 7th</b> of each
            month.
          </>
        ),
      },
      {
        question:
          "If I register in the middle of the month, do I have to pay the full fee?",
        answer: (
          <>
            No, you won't have to pay the full monthly fee if you register in
            the middle of the month. The fee will be adjusted based on the
            remaining weeks:
            <br />
            <br />
            1st - 7th: 100% of the monthly fee
            <br />
            8th - 14th: 80% of the monthly fee
            <br />
            15th - 21st: 60% of the monthly fee
            <br />
            22nd - 28th: 45% of the monthly fee
            <br />
            29th - 31st: 15% of the monthly fee
            <br />
            <br />
            We have designed this system to be fair for all students, ensuring
            that those who join later in the month are not charged the full fee
            while also considering the availability of class recordings for
            revision. This way, every student receives a balanced and reasonable
            fee structure that reflects the classes they have access to.
          </>
        ),
      },
    ],
  },
  {
    title: "Class & Lesson FAQs",
    questions: [
      {
        question: "Can I join in the middle of the month?",
        answer: (
          <>
            Yes, you can! If you join in the middle of the month, you'll{" "}
            <b>only be charged for the remaining classes</b>, depending on which
            week you join. This applies to all courses, including the Algebra
            Crash Course. Lesson recordings are available to help you catch up
            comfortably at your own pace.
          </>
        ),
      },
      {
        question: "How do I join a class?",
        answer: (
          <>
            Joining a class is simple. Just log in to your My Study Space
            account using the email and password you registered with. When it's
            time for your class, a <b>red "Join" button</b> will appear at the
            top in the relevant subject. If you don't see the button, simply
            refresh the page.
            <br />
            <br />
            To avoid any last-minute issues, please make sure you have{" "}
            <b>Zoom installed</b> before your class begins. We use Zoom
            application to conduct live session. You can download zoom at{" "}
            <a
              href="https://zoom.us/download"
              className="text-blue-600 hover:underline"
            >
              zoom.us/download
            </a>{" "}
            or from app stores on tablets.
          </>
        ),
      },
      {
        question: "How do I add more classes?",
        answer: (
          <>
            It's easy!
            <br />
            <br />
            • Log in to your My Study Space account using a phone.
            <br />• If you've already made the monthly payment, you'll see a
            button labeled “<b>Enroll in More Classes.</b>”
            <br />
            • From there, you can select additional subjects and upload the
            payment slip.
            <br />
            <br />
            While you can do this from any device,{" "}
            <b>using a phone might be more</b> convenient since it allows you to
            upload your slip directly from your gallery.
          </>
        ),
      },
      {
        question: "How are rescheduled classes informed to students/parents?",
        answer: (
          <>
            If a class is rescheduled, we will announce it directly on{" "}
            <b>My Study Space</b>. You can find these updates in the{" "}
            <b>Announcements</b> section in the navigation bar, as well as in
            the <b>announcement bar</b> below each class.
            <br />
            <br />
            To stay updated, we recommend checking the <b>Announcements</b>{" "}
            section <b>daily</b> or <b>right before attending a class</b>. We
            also encourage parents to regularly check these announcements to
            stay informed about any schedule changes.
            <br />
            <br />
            <b>Please note:</b> We <b>do not</b> announce rescheduled classes on{" "}
            <b>Viber, Telegram, or any other platform</b>, so be sure to check
            My Study Space for the latest updates.
          </>
        ),
      },
      {
        question: "Which syllabus do you follow?",
        answer:
          "We follow the syllabus provided by the Ministry of Education, which is the same curriculum used in government schools.",
      },
      {
        question: "How many students are in a class?",
        answer: (
          <>
            Our classes do not have a set student limit. While this may seem
            different from traditional tuition, we believe that a larger class
            size creates a{" "}
            <b>
              strong sense of community and allows students to learn from each
              other
            </b>
            . The diverse perspectives make the{" "}
            <b>learning experience more engaging and interactive</b>.
          </>
        ),
      },
      {
        question: "Will teachers help with school homework?",
        answer: (
          <>
            Since our students come from different schools with varying
            curriculums, our teachers are unable to provide assistance with
            school homework during class time.
          </>
        ),
      },
      {
        question: "Will teachers mark the given worksheets?",
        answer: (
          <>
            Worksheets are not marked individually, but teachers go through the
            answers in class to ensure that students understand the concepts.
          </>
        ),
      },
      {
        question: "Can I speak privately with the teachers?",
        answer: (
          <>
            Due to the large number of students we cater to, our teachers are
            unable to have one-on-one conversations with students outside of
            class. However students can ask questions in live sessions.
          </>
        ),
      },
      {
        question: "Can I get the teachers' contact numbers?",
        answer: (
          <>
            To respect the privacy of our teachers, we do not share their
            personal contact details.
          </>
        ),
      },
      {
        question:
          "Can teachers give extra attention to students who are shy or struggling?",
        answer: (
          <>
            Since all our classes are conducted in groups, individual attention
            may not be possible during live sessions.
          </>
        ),
      },
      {
        question: "Can students ask questions during class?",
        answer: (
          <>
            Of course! Students are encouraged to ask questions during lessons.
            They can either use the <b>"Raise Hand"</b> feature in Zoom to
            unmute and ask their question or type it in the <b>chat</b> for the
            teacher to respond.
          </>
        ),
      },
      {
        question: "Do you offer physical/face-to-face tuition?",
        answer: (
          <>
            At the moment, My Study Space is an online-only tuition platform,
            offering classes for <b>Grade 9 & 10 students</b>.
          </>
        ),
      },
      {
        question: "Do you offer private tuition?",
        answer: (
          <>
            No, we currently do not provide private tuition services. All our
            classes are <b>group class-based</b>.
          </>
        ),
      },
      {
        question: "Where can I find the timetable?",
        answer: (
          <>
            You can view and download the latest class timetable{" "}
            <a href="/timetable" className="text-blue-600 hover:underline">
              here
            </a>
            .
          </>
        ),
      },
      {
        question: "Will the timetable change?",
        answer: (
          <>
            Our timetable is carefully planned based on teacher availability and
            to prevent clashes with other classes. For this reason, we are
            unable to make changes. However, if you ever miss a class, you can
            always catch up using the <b>recorded lessons</b>.
          </>
        ),
      },
      {
        question: "What if I miss a live lesson?",
        answer: (
          <>
            There's no need to worry! All our live lessons are recorded so that
            students can revisit them at any time. Each recording also includes
            a <b>short lesson summary</b>, making it easier to find specific
            topics without watching the entire session.
          </>
        ),
      },
    ],
  },
  {
    title: "Guides & Tutorials",
    questions: [
      {
        question: "How to Register for Tuition",
        answer: (
          <>
            Registering for <b>My Study Space</b> is quick and easy—just like
            signing up for your favorite social media apps like Instagram!
            <br />
            <br />
            To get started, simply head over to our{" "}
            <a
              href="https://app.mystudyspace.mv/auth2CreateProfileUpdate"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              registration portal
            </a>
            , and create you account.
            <br />
            <br />
            You can use <b>any device</b> to register (phone, tablet, or
            laptop), but <b>please note</b> that classes can currently only be
            joined from <b>laptops or tablets</b>, as our platform is not yet
            supported on phones for class viewing.
            <br />
            <br />
            When registering, make sure to use a{" "}
            <b>valid student or parent email address</b>. This is important
            because it will be used for password recovery in case you ever
            forget your login details.
            <br />
            <br />
            After you've completed registration and paid for the subjects you've
            selected, your account will go through a short{" "}
            <b>verification process</b>. This usually takes{" "}
            <b>less than an hour</b>, so please check back within that time.
            Once verified, you'll gain full access to your classes, lesson
            recordings, worksheets, and all other learning resources.
            <br />
            <br />
            If you need any assistance during the registration process, don't
            hesitate to reach out! You can{" "}
            <b>message us on Telegram by clicking</b>{" "}
            <a
              href="https://t.me/mystudyspacemv"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              here
            </a>
            , or give us a call at <b>7572910</b> — we're always happy to help!
          </>
        ),
      },
      {
        question: "How to Join Classes",
        answer: (
          <>
            Joining your classes is simple! Just log in to your{" "}
            <b>My Study Space</b> account using the email and password you
            registered with.
            <br />
            <br />
            Once logged in, you'll see your <b>class schedule</b> on your
            dashboard. When it's time for your lesson, a <b>"Join" button</b>{" "}
            will appear at the top of the relevant subject. This button will
            turn <b>red</b> once the teacher has started the class.
            <br />
            <br />
            If the button doesn't change color, simply <b>
              refresh the page
            </b>{" "}
            and try again.
          </>
        ),
      },
      {
        question: "How to Pay Fees",
        answer: (
          <>
            You can pay directly from your My Study Space account using your
            phone, tablet, or laptop.
            <br />
            <br />
            1. Log in with the same email and password used during registration.
            <br />
            2. Click on <b>"Continue to Payment"</b>.
            <br />
            3. Reselect your subjects or add new ones.
            <br />
            4. Upload your payment slip after the transfer.
            <br />
            <br />
            <b>Note:</b> If you've already made payment for the month, it will
            show “Enroll in More Classes” instead of the payment option.
            <br />
            <br />
            <b>Important:</b> We only accept payment slips uploaded through the
            My Study Space platform. We <b>cannot</b> process slips sent through
            Viber, Telegram, Instagram, Messenger, or any other apps.
          </>
        ),
      },
      {
        question: "How to Watch Lesson Recordings",
        answer: (
          <>
            Missed a class? No problem! You can find all lesson recordings in
            your <b>My Study Space</b> account.
            <br />
            <br />
            Simply navigate to your classes, select the relevant subject, and
            scroll down—you'll see all the recordings neatly listed.
            <br />
            <br />
            Each recording includes a <b>short lesson summary</b> written by the
            teacher, so you can quickly find the exact part of the lesson you
            need to review. This makes revision easier and helps new students
            catch up without having to watch entire lessons.
          </>
        ),
      },
      {
        question: "How to Add Subjects",
        answer: (
          <>
            It's easy!
            <br />
            <br />
            • Log in to your My Study Space account using a phone.
            <br />• If you've already made the monthly payment, you'll see a
            button labeled “<b>Enroll in More Classes.</b>”
            <br />
            • From there, you can select additional subjects and upload the
            payment slip.
            <br />
            <br />
            While you can do this from any device,{" "}
            <b>using a phone might be more</b> convenient since it allows you to
            upload your slip directly from your gallery.
          </>
        ),
      },
      {
        question: "How to Reset Your Password",
        answer: (
          <>
            If you ever forget your password, don't worry! You can reset it in
            just a few simple steps:
            <br />
            <br />
            <ol>
              <li>1. Go to the login screen and click "Forgot Password."</li>
              <li>
                2. Enter the email address you used when creating your account.
              </li>
              <li>
                3. A password reset link will be sent to your email. Follow the
                instructions to set a new password.
              </li>
            </ol>
            <br />
            <br />
            <b>That's it!</b> You'll be back to learning in no time.
          </>
        ),
      },
    ],
  },
  {
    title: "Technical Issues FAQs",
    questions: [
      {
        question: "Why doesn't the 'Join' button work on Safari?",
        answer: (
          <>
            This issue occurs because <b>pop-ups are disabled</b> on Safari. You
            can fix it by enabling pop-ups in your Safari settings.
          </>
        ),
      },
      {
        question: "Why doesn't the 'Join' button work on Chrome (Tablet)?",
        answer: (
          <>
            If you are using Chrome on a tablet and experience this issue, go to
            the <b>Zoom page</b>, tap on the <b>three-dot menu</b>, and{" "}
            <b>disable 'Desktop Site' mode</b>. This should allow the Zoom app
            to open properly.
          </>
        ),
      },
    ],
  },
];
