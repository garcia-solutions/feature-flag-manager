/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/health', 'HealthController.HealthCheck')
Route.post('/auth', 'AuthController.Authenticate')
Route.post('/logout', 'AuthController.Logout').middleware(['auth'])

Route.group(() => {
  Route.get('', 'UserController.List')
  Route.post('', 'UserController.AddUser')
  Route.put('/change-active', 'UserController.ChangeUserStatus')
}).prefix('/user').middleware(['auth'])

Route.group(() => {
  Route.get('', 'FeatureFlagController.List')
  Route.post('', 'FeatureFlagController.AddFeatureFlag')
  Route.get('/:number', 'FeatureFlagController.GetFeatureFlag').where('number', { match: /^[\d]+$/, cast: (number) => Number(number) })
  Route.delete('/:number', 'FeatureFlagController.DeleteFeatureFlag').where('number', { match: /^[\d]/, cast: (number) => Number(number) })
  Route.put('/change-active', 'FeatureFlagController.ChangeFeatureFlagStatus')
}).prefix('/feature-flag').middleware(['auth'])

