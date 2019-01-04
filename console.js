const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dont-die-db', { useNewUrlParser: true })

let Vaccine = require('./models/Vaccine.js')
let Profile = require('./models/Profile.js')
let User = require('./models/User.js')
let Record = require('./models/Record.js')


pry = require('pryjs')

//const
;(async function(){
  await User.deleteMany()
  const user1 = new User({
    email: 'megan@example.com',
    password: '1234'
  })
  const user2 = new User({
    email: 'barbara@example.com',
    password: '1234'
  })
  await user1.save()
  await user2.save()
  console.log('Seeded DB with 2 new users.');
  users = await User.find({})

  await Vaccine.deleteMany()
  // Promise.all accepts array of promises
  let vaccines = await Promise.all(vaccineSeeds.map(vacc => {
    let vaccine = new Vaccine(vacc)
    return vaccine.save() // returns promise-like object
  }))
  console.log(`Seeded DB with 5 new vaccines.`);

  await Profile.deleteMany()
  const profile1 = new Profile({
    firstName: 'william',
    lastName: 'farley',
    userId: user1._id
    // vaccinesId: [vaccines[0]._id, vaccines[1]._id]
  })
  const profile2 = new Profile({
    firstName: 'hannah',
    lastName: 'farley',
    userId: user1._id
    // vaccinesId: [vaccines[0]._id, vaccines[1]._id, vaccines[2]._id]
  })
  await profile1.save()
  await profile2.save()
  console.log('Seeded DB with 2 new profiles.');
  profiles = await Profile.find({})

  await Record.deleteMany()
  const record1 = new Record({
    profileId: profile1._id,
    vaccineId: vaccines[0]._id
  })
  const record2 = new Record({
    profileId: profile1._id,
    vaccineId: vaccines[1]._id
  })
  const record3 = new Record({
    profileId: profile2._id,
    vaccineId: vaccines[1]._id
  })
  await record1.save()
  await record2.save()
  await record3.save()
  console.log('Seeded DB with 3 new records.');
  records = await Record.find({})

  eval(pry.it)
})()

const vaccineSeeds = [{
    name: 'Hepatisis (HepB) (1/3)',
    age: [2, 4, 6],
    disease_description: 'chronic liver disease',
    isRequired: true
  },
  {
    name: 'Rotavirus (RV)',
    age: [3, 5, 7, 24],
    disease_description: 'severe poop',
    isRequired: false
  },
  {
    name: 'Diphtheria, Tetanus, Pertussis (DTaP)',
    age: [0, 2],
    disease_description: 'throat inflammation',
    isRequired: true
  },
  {
    name: 'Measles, Mumps, Rubella (MMR)',
    age: [0, 12, 24, 48],
    disease_description: 'ear infections',
    isRequired: true
  },
  {
    name: 'Pneumococcal (PCV)',
    age: [1],
    disease_description: 'prevents death',
    isRequired: false
}]
