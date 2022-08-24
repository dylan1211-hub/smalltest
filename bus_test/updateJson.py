import json

with open('C:\\Users\\cdxvy\\Documents\\ar_bus_test\\bus_test\\foods.json') as jsonFile:
  file = json.load(jsonFile)
  print(file)