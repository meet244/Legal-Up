from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent="my-app")
location = geolocator.reverse("19.1158004, 72.8397202")

# print(location.address)
# print('-------------------------------------')
print (location.raw)
print('-------------------------------------')
print(location.raw['address']['city_district'])
print(location.raw['address']['state'])

