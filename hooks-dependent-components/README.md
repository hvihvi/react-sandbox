# Hooks dependend components

The goal of this showcase is to architecture a form with hooks.

Each question of the form should set a value called a "field".

To showcase dependencies between field, this example will implement 4 questions :

- AGE: "How old are you?" => Select between 0 and 99

- LICENSE_AGE: "How many years have you had your driver's license?" => Select between 0 and (AGE - 16)

- CAR_AGE: "How many years have you drove your last car?" => Select between 0 and LICENCE_AGE

- INSURANCE_AGE: "How many years have you had a car insurance?" => Select between CAR_AGE and LICENCE_AGE

Dependency tree :
- AGE: no dependencies.
- LICENCE_AGE: AGE
- CAR_AGE: LICENCE_AGE
- INSURANCE_AGE: CAR_AGE and LICENCE_AGE