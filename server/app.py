from flask import Flask
from flask_restplus import Resource, Api

app = Flask(__name__)
api = Api(app)

@api.route('/hello')
class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

@api.route("/catalogs")
class FlowerWorld(Resource):
    def get(self):
        catalogs = [
            { "number": 1, "name": "Flowering Trees" },
            { "number": 2, "name": "Orchids" },
            { "number": 3, "name": "Grasses" },
            { "number": 4, "name": "Medicinal Plants" },
            { "number": 5, "name": "Cacti/Succulent Plants" },
            { "number": 6, "name": "Vines & Creepers" },
            { "number": 7, "name": "Flowers of Fragrance" },
            { "number": 8, "name": "Garden Flowers" },
            { "number": 9, "name": "Himalayan Flowers" },
            { "number": 10, "name": "Valley of Flowers" },
            { "number": 11, "name": "Flowers of Western Ghats" },
            { "number": 12, "name": "Flowers of Thar Desert" }
        ]

        return { "catalogs": catalogs }

@api.route("/catalog/<string:catalog_name>")
class Plants(Resource):
    def get(self, catalog_name):
        plants = [
            { "name": "Carolina Fanwort", "url": "https://flowersofindia.net/catalog/slides/Carolina Fanwort.html", "thumb": "https://flowersofindia.net/catalog/famwise.html" },
            { "name": "Prickly Waterlily", "url": "https://flowersofindia.net/catalog/slides/Prickly Waterlily.html", "thumb": "https://flowersofindia.net/catalog/famwise.html" },
            { "name": "Yellow Pond Lily", "url": "https://flowersofindia.net/catalog/slides/Yellow Pond Lily.html", "thumb": "https://flowersofindia.net/catalog/famwise.html" },
            { "name": "Nilofar", "url": "https://flowersofindia.net/catalog/slides/Nilofar.html", "thumb": "https://flowersofindia.net/catalog/famwise.html" },
            { "name": "Meghalaya Red Water Lily", "url": "https://flowersofindia.net/catalog/slides/Meghalaya Red Water Lily.html", "thumb": "https://flowersofindia.net/catalog/famwise.html" },
            { "name": "Large Blue Water Lily", "url": "https://flowersofindia.net/catalog/slides/Large Blue Water Lily.html", "thumb": "https://flowersofindia.net/catalog/famwise.html" },
            { "name": "Lemon Mist Water Lily", "url": "https://flowersofindia.net/catalog/slides/Lemon Mist Water Lily.html", "thumb": "https://flowersofindia.net/catalog/famwise.html" },
            { "name": "Chromatella Waterlily", "url": "https://flowersofindia.net/catalog/slides/Chromatella Waterlily.html", "thumb": "https://flowersofindia.net/catalog/famwise.html" },
            { "name": "Mexican Waterlily", "url": "https://flowersofindia.net/catalog/slides/Mexican Waterlily.html", "thumb": "https://flowersofindia.net/catalog/famwise.html" },
            { "name": "Blue Water Lily", "url": "https://flowersofindia.net/catalog/slides/Blue Water Lily.html", "thumb": "https://flowersofindia.net/catalog/famwise.html" },
            { "name": "Tropical Water Lily", "url": "https://flowersofindia.net/catalog/slides/Tropical Water Lily.html", "thumb": "https://flowersofindia.net/catalog/famwise.html" }
        ]
        return { "plants": plants }

@api.route("/plant/<string:plant_name>")
class Plant(Resource):
    def get(self, plant_name):
        plant = {
            "title":"",
            "images": [
                { "url" : "Kanara Nutmeg.jpg", "taken": "Prashant Awale" },
                { "url" : "../../extrapics/Kanara Nutmeg-1.jpg", "taken": "Prashant Awale" },
                { "url" : "../../extrapics/Kanara Nutmeg-2.jpg", "taken": "Prashant Awale" }
            ],
            "camerainfo": {
                "File size":"542109",
                "Original date":"3/16/13 3:52 PM",
                "Resolution":"1960 x 1470",
                "Flash":"Flash did not fire, auto",
                "Focal length":"6.0mm",
                "Exposure time":"1/400s",
                "Aperture":"5.0",
                "Focus Distance":"",
                "Metering Mode":"Multi-segment",
                "Camera make":"Canon",
                "Camera model":"Canon PowerShot S5 IS",
                "Sensor type":"OneChipColorArea"
            },
            "info" :{
            "evergreen":"E",
            "oblong":"oblong.png",
            "tree":"tree_form.png",
            "nativity":"N",
            "vulnerable":"VU.png",
            "author":"Prashant Awale"
            },
            "names": {
                "Common": "Kanara Nutmeg",
                "lang": [
                    {"Kannada": "ಪಿಂಡಿಕಾಯಿ pindikaayi, ಮೋಂಬತ್ತಿ ಮರ"},
                    {
                        "Malayalam":"പിണ്ടിക്കായ pintikkaya, ഉണ്ടപ്പയിൻ undappayin"
                    }
                ]
            },
            "scientific": {
                "botname":"Gymnacranthera canarica (King) Warb.",
                "genus":"Gymnacranthera canarica",
                "Family": "Myristicaceae</span> (Nutmeg family)",
                "Synonyms":"Gymnacranthera farquhariana"
            },
            "description": "Kanara Nutmeg is an endangered, endemic tree of Western Ghats. The species is exclusively associated with swampy conditions and habitat destruction seems to be the major threat. The species name <i>canarica</i> alludes to the north Karnataka region called Kanara. It is an evergreen tree up to 25 m tall. Bark is dark brown, warty, blaze reddish brown. Branches are verticillate and right angles to main trunk, young branchlets round, rusty velvety. Sap is reddish from cut end of bark, not profuse. Leaves are simple, alternate, carried on stalks 1-2 cm long, slightly channelled, somewhat velvety when young. Leaf-blade is 11-26 x 4-10 cm, usually narrow oblong or oblong, sometimes lanceshaped, tip abruptly or gradually long-pointed, base usually rounded, sometimes slightly flat, margin entire, leathery, shinning above, glaucous beneath. Midrib is flat above, secondary nerves 7-14 pair. Flowers are unisexual, dioecious. Male flowers are yellowish, in axillary panicles, fulvous velvety. Female flowers are larger, borne in racemes in leaf axils. Capsules are spherical, up to 3.2 cm across, hairless, with one spherical seed, pale brown with laciniate aril. Kanara Nutmeg is endemic to the Western Ghats.",
            "photocredit": "Photographed in Katlikan, Karnataka.",
            "identificationcredit": ["Prashant Awale"]
        }
        return { "plant": plant }

if __name__ == '__main__':
    app.run(debug=True)
