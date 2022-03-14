import React from "react";
import { Accordion } from "react-bootstrap";
import "./faq.css";
import pic from "./img/chicken soup_748886560.jpg";
export default function Faq() {
  return (
    <>
      <div class="breadcrumbs bg-light">
        <section class="container m-0 p-0">
          <div class="row ps-4 mb-4 ">
            <div class="col-sm-12 col-md-6">
              <h3 className="my-0 p-0">Frequently Asked Questions</h3>
            </div>
{/* 
            <div class="crumbs col-sm-12 col-md-6 text-end">
              <a href="">Home</a>
              <span class="crumbs-span">/</span>
              <span class="current">Frequently Asked Questions</span>
            </div> */}
          </div>
        </section>
      </div>

      <div className="container-fluid bg">
        <div className="row justify-content-between">
          <div className="col-sm-12 col-md-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header id="head" className="accHeader">
                  <span className="Qspan"> Q. </span> Are foods that contain
                  sugar unhealthy?
                </Accordion.Header>
                <Accordion.Body>
                  Sugar can be an enemy to a healthy diet, tasting so delicious
                  in a variety of food and even hidden in foods that you
                  wouldn’t suspect. Yet it is important to address the
                  difference between natural and added sugars for a healthy
                  diet. Sugars are carbs which provide a vital source of energy
                  and nutrition, yet many popular foods have sugar added to
                  them, this is when sugars become unhealthy. Fruits and some
                  vegetables contain naturally occurring sugars which are
                  considered healthy when not consumed in overly excessive
                  amounts, but added sugars provide nearly no nutritional value
                  and contribute significantly to weight gain, damaging your
                  health diet. It is therefore important to check the labels to
                  ensure no products contain hidden added sugars.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="Qspan"> Q. </span>How can you benefit from a
                  healthy diet?
                </Accordion.Header>
                <Accordion.Body>
                  Eating a healthy diet most obviously will assist you in losing
                  weight, but healthy eating has many other benefits. Changing
                  your diet can significantly improve your general health,
                  tackling diseases associated with heart conditions and
                  cholesterol, as well as aiding diabetes, types of cancers, and
                  even depression. Those who eat a balanced and healthy diet are
                  generally considered to live longer lives because of these
                  health benefits. Diet changes can also boost energy levels as
                  high sugar and fat based foods are generated into energy
                  quickly and so run out quickly, leaving us fatigued. Healthier
                  foods release energy at a slower rate, producing a slower and
                  more sustainable release of energy over a longer period of
                  time. Healthy eating can not only improve your body but can
                  change your mood; making you feel more positive and more
                  relaxed, particularly when combined with exercise.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="Qspan"> Q. </span> How can you achieve a
                  healthy diet?
                </Accordion.Header>
                <Accordion.Body>
                  The general rules for healthy eating is that natural foods are
                  generally healthy, and if a product has been overly processed
                  it may contain unhealthy ingredient such as added sugars or
                  ‘bad’ fats. Cutting down on sugars, fats and salts is usually
                  a good place to start when changing a diet as these elements
                  are usually the problem, and instead, replace them with
                  natural products such as fruits, veg, nuts, seeds grains and
                  so on. The key to a healthy diet is balance and ensuring the
                  correct amounts of each dietary element. Your diet should
                  include a range of carbs, proteins, vitamins and mineral, fats
                  and dairy, which in appropriate amounts can help you feel the
                  health benefits that follow with a healthy diet.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="Qspan"> Q. </span> What is the relationship
                  between eating healthily and calories?
                </Accordion.Header>
                <Accordion.Body>
                  Calories are your body’s source of fuel. We need to refuel our
                  energy supply by eating food, yet many diets have branded
                  calories as our enemy for weight, yet calories are a necessary
                  part of our lives. A regular man should aim for around 2500
                  calories, and a woman around 2,000 calories per day for a
                  healthy diet, unless trying to lose weight. Generally high
                  calorie foods indicate a higher amount of salt, sugars or fat,
                  yet some foods that are naturally high in calories are a
                  useful, nutritious inclusion to a healthy diet. Corn, nuts,
                  avocados, olive oil, and whole grain breads are all
                  calorie-rich but beneficial foods, providing a variety of
                  nutrients needed in your diet and also provide long lasting
                  satisfaction to other healthy foods that fail to fill you up.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="Qspan"> Q. </span>Are carbs unhealthy?
                </Accordion.Header>
                <Accordion.Body>
                  Many popular diets brand carbs as bad for your waistline and
                  therefore your health, which when consumed excessively with
                  other nutrients can have a negative effect, but carbs are an
                  essential element to your diet. Many different foods contain
                  carbs, including the typical foods such as pastas and breads,
                  yet fruits and vegetables also contain carbohydrates, which
                  are a healthy source of not only energy but also vitamins and
                  nutrients. Processed carbohydrates can impact your health, and
                  when trying to lose weight restricting carbs may be helpful,
                  but carbs are a significant element to a balanced diet and
                  when consumed sensibly contribute greatly to your healthy
                  eating.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="Qspan"> Q. </span>Are foods that contain
                  sugar unhealthy?
                </Accordion.Header>
                <Accordion.Body>
                  Sugar can be an enemy to a healthy diet, tasting so delicious
                  in a variety of food and even hidden in foods that you
                  wouldn’t suspect. Yet it is important to address the
                  difference between natural and added sugars for a healthy
                  diet. Sugars are carbs which provide a vital source of energy
                  and nutrition, yet many popular foods have sugar added to
                  them, this is when sugars become unhealthy. Fruits and some
                  vegetables contain naturally occurring sugars which are
                  considered healthy when not consumed in overly excessive
                  amounts, but added sugars provide nearly no nutritional value
                  and contribute significantly to weight gain, damaging your
                  health diet. It is therefore important to check the labels to
                  ensure no products contain hidden added sugars.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="Qspan"> Q. </span> How can a healthy diet
                  affect cholesterol?
                </Accordion.Header>
                <Accordion.Body>
                  Cholesterol is a fat based substance that is needed within the
                  body, but when present in excessive amounts can cause serious
                  health problems. Low density cholesterol will cause blocks in
                  the arteries, significantly increasing the risk of heart
                  disease, all is not lost however as the levels of bad
                  cholesterol can be reduced by what you eat. Not eating enough
                  protective fats such as nuts and seeds, along with eating high
                  saturated fat foods increases the cholesterol found in the
                  blood. Basic changes such as consuming more fruits,
                  vegetables, lean or fat-free animal products and high fibre
                  foods will reduce your cholesterol levels and reduce the risk
                  of cardiovascular diseases.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="col-sm-12 col-md-5  ">
            {/* <img className="bg-img" src={pic} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
