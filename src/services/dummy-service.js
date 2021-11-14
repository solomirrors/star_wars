export default class DummyService{
    _people = [
        {
            Id: 1,
            Name: 'Bilbo Baggins [TEST DATA]',
            Url: `https://placeimg.com/400/500/people`,
            desc_1: 'Height',
            personHeight: '126',
            desc_2: 'Mass',
            personMass: '76',
            desc_3: 'Hair Color',
            personHairColor: 'Green',
            desc_4: 'Skin Color',
            personSkinColor: 'Red',
            desc_5: 'Birth Year',
            personBirthYear: 'YYSS5',
            desc_6: 'Gender',
            personGender: 'Male'
        },

        {
            Id: 1,
            Name: 'Frodo Baggins [TEST DATA]',
            Url: `https://placeimg.com/400/500/people`,
            desc_1: 'Height',
            personHeight: '23',
            desc_2: 'Mass',
            personMass: '79',
            desc_3: 'Hair Color',
            personHairColor: 'Dark',
            desc_4: 'Skin Color',
            personSkinColor: 'Orange',
            desc_5: 'Birth Year',
            personBirthYear: 'YYEE5',
            desc_6: 'Gender',
            personGender: 'Male'
        }
    ];

    _planets = [
        {
            Id: 1,
            Name: 'Mars',
            Url: `https://placeimg.com/600/400/tech`,
            desc_1: 'Population',
            planetPopulation: '0',
            desc_2: 'Climate',
            planetClimate: 'None',
            desc_3: 'Diameter',
            planetDiameter: '12000000',
            desc_4: 'Gravity',
            planetGravity: '0.63',
            desc_5: 'Rotation Period',
            planetRotationPeriod: '36',
            desc_6: 'Orbital Period',
            planetOrbitalPeriod: '72',
        },
        {
            Id: 1,
            Name: 'Venera',
            Url: `https://placeimg.com/600/400/tech`,
            desc_1: 'Population',
            planetPopulation: '0',
            desc_2: 'Climate',
            planetClimate: 'Hot',
            desc_3: 'Diameter',
            planetDiameter: '43565666',
            desc_4: 'Gravity',
            planetGravity: '0.23',
            desc_5: 'Rotation Period',
            planetRotationPeriod: '512',
            desc_6: 'Orbital Period',
            planetOrbitalPeriod: '1024',
        }
    ];

    _starships = [
        {
            Id: 1,
            Name: 'Normandy',
            Url: `https://placeimg.com/400/400/nature`,
            desc_1: 'Model',
            starshipModel: 'SR-2',
            desc_2: 'Consumables',
            starshipConsumables: '2 year',
            desc_3: 'MaxSpeed',
            starshipMaxSpeed: '520',
            desc_4: 'Length',
            starshipLength: '120',
            desc_5: 'Crew',
            starshipCrew: '240.0000000',
            desc_6: 'Drive Rating',
            starshipDriveRating: '10.0'
        }
    ];

    getAllPeople = async () => {
        return this._people;
    };

    getPerson = async () => {
        return this._people[0];
    };

    getAllPlanets = async () => {
        return this._planets;
    };

    getPlanet = async () => {
        return this._planets[0]
    };

    getAllStarships = async () => {
        return this._starships;
    };

    getStarship = async () => {
        return this._starships[0];
    };

}