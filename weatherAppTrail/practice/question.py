def celsius_to_kelvin(celsious):
    kelvin = celsious + 273.15
    return kelvin

celsius_value = float(25)
print(celsius_to_kelvin(celsius_value))



# Function to convert Kelvin to Celsius
def kelvin_to_celsius(kelvin):
    celsius = kelvin - 273.15
    return celsius

# Example usage
kelvin_value = float(300)
celsius_value = kelvin_to_celsius(kelvin_value)
print(celsius_value)
