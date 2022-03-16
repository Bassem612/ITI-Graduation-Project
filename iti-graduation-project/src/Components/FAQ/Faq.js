import React from "react";
import { Accordion } from "react-bootstrap";
import "./faq.css";
import pic from "./img/chicken soup_748886560.jpg";
export default function Faq() {
  return (
    <>
      <div className="container-fluid frst-bg mb-4  ">
        <div className="row mx-0 py-0 justify-content-center align-items-center fw-bold text-center ">
          <div className="col-sm-12 col-md-6 mt-5 m-0 p-0">
            <h1 className="text-dark about-H ">FAQ</h1>
            <p className="text-dark">Frequently Asked Questions</p>
          </div>
        </div>
      </div>

      <div className="container mt-4 ">
        <div className="row mx-0 py-0 justify-content-between">
          <div className="col-sm-12 col-md-12 ">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <span className="Qspan"> Q </span> What is a healthy diet?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    The fundamental principle to a healthy diet comes down to
                    one word; balance. Many other factors are included to ensure
                    a balanced diet, but essentially eating enough food that
                    provides the range of nutrients your body requires
                    encourages the promotion of good health. It is important to
                    ensure this variety of foods, guaranteeing a broad range of
                    the nutrients, vitamins and minerals that your body needs.
                    When you are receiving too little or too much of certain
                    elements, this can result in health problems. That is why
                    moderation and control of your diet is important. For
                    example, fats are a necessary part of your diet, but when
                    they exceed the body’s required amount, it can be stored in
                    the body, potentially causing problems, most importantly
                    cardiovascular issues.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <span className="Qspan"> Q </span> How can you benefit from
                    a healthy diet?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Eating a healthy diet most obviously will assist you in
                    losing weight, but healthy eating has many other benefits.
                    Changing your diet can significantly improve your general
                    health, tackling diseases associated with heart conditions
                    and cholesterol, as well as aiding diabetes, types of
                    cancers, and even depression. Those who eat a balanced and
                    healthy diet are generally considered to live longer lives
                    because of these health benefits. Diet changes can also
                    boost energy levels as high sugar and fat based foods are
                    generated into energy quickly and so run out quickly,
                    leaving us fatigued. Healthier foods release energy at a
                    slower rate, producing a slower and more sustainable release
                    of energy over a longer period of time. Healthy eating can
                    not only improve your body but can change your mood; making
                    you feel more positive and more relaxed, particularly when
                    combined with exercise.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <span className="Qspan"> Q </span> How can you achieve a
                    healthy diet?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  The general rules for healthy eating is that natural foods are generally healthy, and if a product has been overly processed it may contain unhealthy ingredient such as added sugars or ‘bad’ fats. Cutting down on sugars, fats and salts is usually a good place to start when changing a diet as these elements are usually the problem, and instead, replace them with natural products such as fruits, veg, nuts, seeds grains and so on. The key to a healthy diet is balance and ensuring the correct amounts of each dietary element. Your diet should include a range of carbs, proteins, vitamins and mineral, fats and dairy, which in appropriate amounts can help you feel the health benefits that follow with a healthy diet.


                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    <span className="Qspan"> Q </span> What is the relationship between eating healthily and calories?

                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-collapseFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  Calories are your body’s source of fuel. We need to refuel our energy supply by eating food, yet many diets have branded calories as our enemy for weight, yet calories are a necessary part of our lives. A regular man should aim for around 2500 calories, and a woman around 2,000 calories per day for a healthy diet, unless trying to lose weight. Generally high calorie foods indicate a higher amount of salt, sugars or fat, yet some foods that are naturally high in calories are a useful, nutritious inclusion to a healthy diet. Corn, nuts, avocados, olive oil, and whole grain breads are all calorie-rich but beneficial foods, providing a variety of nutrients needed in your diet and also provide long lasting satisfaction to other healthy foods that fail to fill you up. 


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
