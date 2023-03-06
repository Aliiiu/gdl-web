import CustomHeader, {
  HeaderTabBar,
} from "../components/Widgets/CustomHeader/Header";
import faqImage from "../assets/Images/faq.jpeg";
import { TopContent } from "../components/Widgets/CustomHeader/HeaderContent";
import AppAccordion from "../components/Widgets/Accordion/Accordion";

const faqArray = [
  {
    question: "What is the full meaning of GDL",
    answer: "Growth and Development Asset Management Limited",
  },
  {
    question: "How do I get started?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "What licenses do you have?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "How can I be sure my money is safe with you?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "How many products are there?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "How fast can I withdraw?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const tabNames = {
  All: "",
  Investments: "",
};

const FAQPage = () => {
  const desc =
    "A compilation of answers to questions that will help you understand our products even better.";
  return (
    <div>
      <div>
        <CustomHeader
          hasBackImg
          imgUrl={faqImage}
          content={<TopContent name="FAQs" description={desc} />}
        />
        <HeaderTabBar tabs={tabNames} />
      </div>
      <div className="my-10 md:px-[1.5rem] px-[1.25rem] mx-auto max-w-[56rem]">
        {faqArray.map(content => (
          <AppAccordion {...content} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;