const cropDescriptions = {
  apple:
    "The most suitable crop predicted for your conditions is Apple. They are usually takes a few years to start producing fruit after planting. Apples is are fruits known for their sweet and crisp taste. They come in various varieties, each with unique flavors and uses. Apple trees require careful pruning and care to ensure optimal fruit production. The trees typically take a few years to establish and start bearing fruit.",
  banana:
    "The recommended crop for your conditions is Banana.Banana plants usually start producing fruit within 9-12 months after planting.Bananas are nutritious and convenient fruits with a high potassium content. They grow in tropical regions and are cultivated from the banana plant. The plant's large leaves provide shade for the developing fruit clusters. Depending on the variety, banana plants usually start producing fruit within 9-12 months after planting.",
  adzukibeans:
    "The AI model suggests Adzuki Beans as the most suitable crop.Adzuki beans typically mature within 3-4 months after planting.Adzuki beans, also known as azuki or aduki beans, are small, reddish-brown legumes with a nutty flavor. They are commonly used in Asian cuisines for both sweet and savory dishes. Adzuki beans are rich in protein and fiber. Depending on the growing conditions, they generally mature within 3-4 months after planting.",
  blackgram:
    "The predicted crop that best suits your conditions is Black Gram.Black gram plants usually mature within 2-3 months after planting.Black gram, also known as black lentil, is a highly nutritious pulse. It's rich in protein and iron, making it a valuable ingredient in various cuisines. Black gram is often used to make soups, stews, and traditional dishes. The plants usually mature within 2-3 months after planting.",
  chickpea:
    "The recommended crop for your conditions is Chickpea.Chickpea plants usually mature within 3-4 months after planting. Chickpeas, also known as garbanzo beans, are versatile legumes used in cooking worldwide. They are an excellent source of plant-based protein and fiber. Chickpeas can be used in soups, salads, curries, and snacks. Depending on the variety, chickpea plants usually mature within 3-4 months after planting.",
  coconut:
    "The AI model suggests Coconut as the most suitable crop.Coconut palms take several years to start producing coconuts.Coconuts are tropical fruits with a refreshing taste. They are known for their water, milk, oil, and flesh, all of which have culinary and non-culinary uses. Coconut palms require warm climates and well-drained soil. It takes several years for coconut palms to grow and start producing coconuts. ",
  coffee:
    "The predicted crop that best suits your conditions is Coffee. Coffee plants take a few years to mature and start producing beans. Coffee is a popular beverage made from roasted coffee beans. It's known for its stimulating effects due to caffeine. Coffee plants require specific conditions, including moderate temperatures and consistent rainfall. The plants usually take a few years to grow, flower, and produce beans.",
  cotton:
    "The recommended crop for your conditions is Cotton. Cotton plants typically mature within 5-6 months after planting.Cotton is a valuable crop primarily cultivated for its fibers, which are used to make textiles and clothing. Cotton plants require warm temperatures and ample sunlight. The fibers are separated from the cotton seeds and used to create a wide range of products. Depending on the variety, cotton plants usually mature within 5-6 months after planting. ",
  grapes:
    "The AI model suggests Grapes as the most suitable crop. Grapevines usually start producing fruit within 2-3 years after planting. Grapes are sweet and juicy fruits often eaten fresh or used to make various products such as wine, juice, and raisins. Grapevines require support structures for climbing and plenty of sunlight. Depending on the variety and growing conditions, grapevines usually start producing fruit within 2-3 years after planting.",
  groundnut:
    " The predicted crop that best suits your conditions is Groundnut. Groundnut plants typically mature within 3-4 months after planting. Groundnuts, also known as peanuts, are a rich source of protein and healthy fats. They are consumed as snacks, in cooking, and in making peanut butter. Groundnut plants are well-suited to warm climates and well-drained soil. Depending on the growing conditions, they generally mature within 3-4 months after planting.",
  jute: "The recommended crop for your conditions is Jute. Jute plants usually mature within 4-6 months after planting.Jute is a fiber crop used for making burlap and other textiles. It's known for its strong and coarse fibers and is used in various industries. Jute plants require ample water and warm weather to thrive. The fibers are extracted from the plant's stem and are used for producing a range of products. Depending on the variety, jute plants usually mature within 4-6 months after planting.",
  kidneybeans:
    "The AI model suggests Kidney Beans as the most suitable crop. Kidney bean plants typically mature within 2-3 months after planting. Kidney beans are large, kidney-shaped legumes that are a good source of plant-based protein and fiber. They are used in various cuisines to make soups, stews, and salads. Kidney bean plants usually thrive in warm climates and well-drained soil. Depending on the growing conditions, they generally mature within 2-3 months after planting.",
  lentil:
    "The predicted crop that best suits your conditions is Lentil. Lentil plants usually mature within 2-3 months after planting.Lentils are nutritious legumes that come in various colors, including green, brown, and red. They are rich in protein, fiber, and essential nutrients. Lentils are used in various dishes, such as soups, curries, and salads. Depending on the variety and growing conditions, lentil plants usually mature within 2-3 months after planting. ",
  maize:
    "The recommended crop for your conditions is Maize. Maize typically takes around 2-4 months to mature and be ready for harvest. Maize, also known as corn, is a versatile cereal crop widely cultivated for both human consumption and livestock feed. It's used in various forms, such as cornmeal, cornstarch, and corn oil. Maize requires ample sunlight and well-drained soil. Depending on the variety and growing conditions, maize typically takes around 2-4 months to mature and be ready for harvest.",
  mango:
    "The AI model suggests Mango as the most suitable crop.Mango trees usually take several years to mature and start producing fruit. Mangoes are tropical fruits cherished for their sweet and juicy flesh. They come in numerous varieties with different flavors and sizes. Mango trees require warm temperatures and plenty of sunlight. The trees usually take several years to establish and start producing fruit. Mangoes are often enjoyed fresh or used in various culinary creations.",
  millet:
    "The recommended crop for your conditions is Millet. Millet plants typically mature within 2-3 months after planting. Millet is a group of small-seeded grasses used as cereal crops. They are known for their drought tolerance and adaptability to various environments. Millet is a staple food in some regions and can be used in porridge, bread, and other dishes. Depending on the variety, millet plants usually mature within 2-3 months after planting. ",
  mothbeans:
    "The predicted crop that best suits your conditions is Moth Beans. Moth bean plants typically mature within 2-3 months after planting.Moth beans, also known as matki or Turkish gram, are small, drought-tolerant legumes. They are popular in Indian cuisine and are used in a variety of dishes. Moth beans are rich in protein and fiber. Depending on the growing conditions, they generally mature within 2-3 months after planting.",
  mungbean:
    "The recommended crop for your conditions is Mung Beans. Mung bean plants typically mature within 2-3 months after planting.Mung beans, also known as green gram, are small, green legumes commonly used in Asian cooking. They are often sprouted and used in salads, soups, and curries. Mung beans are rich in nutrients and are considered a good source of plant-based protein. Depending on the variety, mung bean plants usually mature within 2-3 months after planting. ",
  muskmelon:
    "The AI model suggests Muskmelon as the most suitable crop.Muskmelon plants usually mature within 2-3 months after planting. Muskmelon, also known as cantaloupe, is a sweet and aromatic fruit with orange flesh. It's enjoyed fresh and can be used in salads and desserts. Muskmelon plants require warm temperatures and well-drained soil. Depending on the variety and growing conditions, they usually mature within 2-3 months after planting.",
  orange:
    "The predicted crop that best suits your conditions is Orange.Orange trees usually take a few years to mature and start producing fruit. Oranges are popular citrus fruits known for their tangy and juicy flavor. They are rich in vitamin C and are used for eating fresh, making juice, and flavoring various dishes. Orange trees require warm climates and well-drained soil. The trees usually take a few years to establish and start bearing fruit. ",
  papaya:
    "The recommended crop for your conditions is Papaya. Papaya plants usually start producing fruit within 6-9 months after planting. Papayas are tropical fruits with sweet orange flesh and black seeds. They are rich in vitamins and enzymes and are often enjoyed fresh or used in smoothies. Papaya plants require warm temperatures and well-drained soil. Depending on the variety, papaya plants usually start producing fruit within 6-9 months after planting.",
  peas: "The AI model suggests Peas as the most suitable crop for your Environment based on your Given input. Pea plants usually mature within 2-3 months after planting.They require support structures to climb and thrive in cooler temperatures. Depending on the variety, pea plants usually mature within 2-3 months after planting.",
  pigeonpeas:
    "The predicted crop that best suits for your Environment based on your Given input is Pigeon Peas. Pigeon peas plants typically mature within 4-6 months after planting. Pigeon pea plants require well-drained soil and warm climates. Depending on the growing conditions, they generally mature within 4-6 months after planting. ",
  rice: "The recommended crop for your Environment based on your Given input is Rice. Rice usually takes around 3-6 months to mature and be ready for harvest. Rice is typically grown in flooded fields called paddies and requires a significant amount of water. Depending on the variety and growing conditions, rice usually takes around 3-6 months to mature and be ready for harvest.",
  rubber:
    "The Predicted crop for your Environment based on your Given input is Rubber. Rubber refers to the latex produced by the rubber tree (Hevea brasiliensis). It is primarily cultivated for its use in various industries, including the production of tires and rubber products. Rubber trees take around 7-10 years to mature and start producing latex.",
  sugarcane:
    "The Predicted crop for your Environment based on your Given input is Sugarcane. Sugarcane is a tall perennial grass known for its high sugar content. It is primarily cultivated for sugar and ethanol production. Sugarcane plants typically have a growth period of around 12-18 months.",
  tea: "Tea is an aromatic beverage made from the leaves of the Camellia sinensis plant. It comes in various varieties such as Assam and Darjeeling. Tea plants usually take around 3-5 years to mature and are known for their caffeine content.",
  tobacco:
    "Tobacco is a plant cultivated for its leaves, which are used for smoking, chewing, or as an ingredient in various tobacco products. It has a relatively short growth period of around 3-4 months.",
  watermelon:
    "Watermelon is a juicy and refreshing fruit, especially popular in hot summers. It typically takes around 70-90 days for watermelon plants to mature and produce fruit.",
  wheat:
    "Wheat is a cereal grain widely cultivated for its edible seeds. It comes in different varieties such as hard red spring and soft white. Wheat has a growth period of around 90-120 days and is known for its high protein content, making it a staple food in many regions.",
  pomegranate:
    "The recommended crop for your conditions is Pomegranate. Pomegranate trees usually take a couple of years to mature and start producing fruit. Pomegranates are known for their unique, jewel-like seeds surrounded by juicy arils. They are rich in antioxidants and vitamins. Pomegranate trees require well-drained soil and plenty of sunlight. The trees usually take a couple of years to establish and start bearing fruit. Pomegranates are often eaten fresh, used in salads, or turned into juice.",
};

export default cropDescriptions;
