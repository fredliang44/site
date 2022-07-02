---
title: Who Knows You Better
date: 2019-06-09T20:27:11.000Z
draft: false
description: 'Just finished watching the second episode of the fifth season of "Black Mirror" season 5, some thoughts on the plot'
tags: ['Product Manager', 'Share']
image: '/img/briana.jpg'
---

> Just finished watching the second episode of the fifth season of Black Mirror, about a large social media company: Smithereens (fragments) about a carpool driver in London kidnapped an employee of a social media Internet company, triggering an international crisis.
> The reason why this episode is singled out is because the interpretation of this episode is too close to the reality of their own exposure, especially some of the interpretation of technology and society is very profound.

![account analyticsz](https://storage.fredliang.cn/web/2019-06-10-064128.png?x-oss-process=image/resize,w_1000/quality,Q_60)

## Group and individual data

### Individual data

One thing that struck me in this episode was the difference between the police and the COO of the shard going over the dimensions of Chris' background information.

The police wanted to know if Chris had any criminal history, what his previous jobs were, his relatives, and where he lived. However, after Shard learned about the incident, they directly saw Chris's data in the user analysis interface in the backend: including his history of work, the user tags assigned to him (high IQ low income), login behavior, the cloud map of keywords used, the activity of the platform, and also learned about the driver's previous order history (and confirmed that the driver was impersonating his identity), and judged that it was a purposeful kidnapping of a company employee. Based on the history post previous accidents and the psychological state of the protagonist.

Internet companies record user data has become an industry practice, but for the use of user data most people actually have many misconceptions. There are some dimensions that are overly speculative and others that are not considered.

The government's monitoring of people was previously focused on "discrete key points", such as property registration, criminal records, and loan history. Continuous information is more difficult for the government to record, such as mental state, emotional state, and change of thinking. But people's long time operation behavior on the cell phone can reflect this linear change very well.

Thankfully, the current Internet companies for individual data analysis (mining) degree is still relatively low, more in-depth application is only precision marketing, user tagging system. The application scenario of analytical projects for individuals is still relatively narrow. However, with the head application and the company's incremental slowdown, refined data analysis is an inevitable trend, and it is necessary to explore for related data rights in the long run.

### Group data

When doing A/B Test during the previous internship, I saw someone lamenting about the test resources they had, and felt that it was a waste not to analyze it seriously. Doing AB inside the billion level of users, using only 10% of the traffic is the 10 million level, which is a sample size that can hardly be obtained inside the school. In the case of well-designed experimental conditions, the confidence level of the results is also much higher and more accurate.

At present, the analysis of users in Internet companies is still mainly linked to the superficial product requirements, such as the relationship between user click behavior and UI style. In this degree of analysis context, in fact, for personal privacy invasion can be ignored, but if substituted into another scenario.

- Every morning the devices in your home are operated with the assistance of an intelligent assistant, such as Google Home automatically turning on the lights and opening the windows when you wake up -
- Your travel behavior is tied to the location data of maps and cars
- What you want to eat is recorded in detail in the review app
- Invitations to social events are recorded through calendar tools

In this scenario, i.e. where group-based results are applied against an individual, it is easier to target analysis to one person. Because the prerequisite for applying group results is the results of individual analysis data, similar analysis results of each dimension can be pieced together in detail to create a complete user portrait, and it is much easier to target user behavior prediction.

All of the above has basically become a reality, and it can be said that if you can connect these data, your will "behavioral data" more than you know you. In a good dimension.

- You are new to a city, your voice assistant automatically give you recommendations for local food, according to your consumption level to book hotels.
- On your friend's birthday, your voice assistant will automatically send you a gift that your friend likes, and all you have to do is reply to the assistant with "confirm".

Similarly, there may be situations where

- One day you're defending a tweet you made 10 years ago and someone challenges it as being inconsistent with your values.
- Your personal cell phone number is picked up by a search engine on a web page, and is recorded by a crawler and filed to the appropriate people for ad recommendations.
- Social media influences the direction of public opinion and political leanings through content recommendation mechanisms.

It is difficult to ask commercial companies to use user data in accordance with ethical guidelines, but we should more from legislation and industry regulations to regulate the use of personal data and analysis. The amount of sensitive data that can be accessed by smartphones, such as smart homes, is unimaginable, but most companies do not dig deeper into the application scenarios of these data because of business relevance, nor do they have the awareness to prevent the misuse of this data. Once the data is accessed by someone with an ulterior motive, the risks associated with such data are enormous.

## Tech Makes Who you are

Everyone's relationship with the outside world is mutual, and as they change the outside world, they are changed by it. The Cambridge case is still just an attempt to influence political elections through advertising - after all, there is a clear AD Load in place, and the flow of information they can manipulate is only a small fraction. What is more worrying is that similar to during the U.S. election, Google and other companies are influencing people's subjective judgment by modifying search engine keyword tips to canvass for Hillary. In recent years, Internet companies are more or less aware of their ability to influence the overall direction of public opinion, such as the Dianfu incident and the #MeToo movement, the spread of these events are creating the macro value system of everyone at the moment.

Thankfully the top internet or social media companies have the "right" values, but it's like letting a 5 year old hold the button to control a nuclear weapon. Most situations are safe in the absence of malicious intent, but it is difficult to ensure long-term harmlessness. For example, are there uncontrollable factors that affect these companies, such as mandatory laws or industry regulations that interfere with a company's online presence? Or some malicious company acquiring the business of another company through an acquisition?

## God Mode

This one is after seeing a [document from Taiwan](https://news.agentm.tw/59235/%E9%BB%91%E9%8F%A1-%E7%AC%AC%E4%BA%94%E5%AD%A3-%E7%A2%8E%E7%89%87-smithereens-%E8%A7%A3%E6%9E%90/) and thought it was an appropriate title to "take", when you have domain-wide data access, it feels like you are typing a cheat codes in GTA. You can get all the data of a user, such as travel records, hotel reservation records, taxi records, etc. Having been "lucky" enough to get similar access after signing a confidentiality clause, it's hard to forget the first time you were surprised at the sheer size of the user's behavior when you looked up the data.

Especially since online advertising has opened up cross-platform data, user IDs can be converted directly between different APPs and companies, and user data can be opened up as well. If the data is completely shared, the corresponding user profiles can be incredibly detailed.

## Technology Detox

It's a magical but realistic scenario to be honest, like when Marc Benioff (Salesforce CEO) put his iPhone and iPad in a FedEx envelope and mailed it to his summer home in Hawaii in early July 2018. He then flew out of San Francisco for a quiet two-week vacation in the Galapagos Islands, Bora Bora and Easter Island. And in January, during the World Economic Forum in Davos, he publicly criticized Facebook, saying it was as addictive as tobacco.

There is an argument that when the stock of users comes to a head, everyone is competing for the time of use of users. With this stated goal, different applications will inevitably become more addictive, and highly focused and stimulating content will greatly enhance the user's "High point", thus reducing interest in other things and potentially affecting the normal life of the user community. Under the profit model through online advertising, this closed loop will be more tightly connected, for example, inside the information flow product, the longer the user uses the product, the more content he browses, the more ads he views, and the more economic gains the Internet company makes. From a certain point of view, this is also a kind of "free is the most expensive" embodiment.

## Right to be forgotten

Right to be forgotten' is a human rights concept that exists within the European Union. In short, it means that people have the right to request the removal of negative information about themselves or outdated personally identifiable search results; however, because of the conflict with freedom of expression and the potential for Internet censorship, it is controversial and the legal framework is still unclear, and is currently only practiced in the EU.

URLs removed from Google search results due to privacy concerns: <https://transparencyreport.google.com/eu-privacy/overview>

The list of most affected websites (up to 2019.06.09).

| Domain names              | Number of URLs removed | Total number of URLs requested to be removed |
| :------------------------ | ---------------------- | -------------------------------------------- |
| www.facebook.com          | 21,418                 | 51,658                                       |
| annuaire.118712.fr        | 16,836                 | 21,657                                       |
| twitter.com               | 14,246                 | 32,238                                       |
| www.youtube.com           | 12,347                 | 32,984                                       |
| profileengine.com         | 11,565                 | 13,637                                       |
| groups.google.com         | 9,196                  | 19,873                                       |
| plus.google.com           | 8,878                  | 35,621                                       |
| scontent.cdninstagram.com | 8,243                  | 13,982                                       |
| www.wherevent.com         | 6,181                  | 7,189                                        |
| badoo.com                 | 6,012                  | 11,009                                       |
