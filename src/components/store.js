export const BANNERS = [
    {
        id: 0,
        image: 'assets/coffee-and-friends.jpeg',
        imageAlt: 'Coffee and Friends',
        description1: 'Genuine coffee. Genuine people. All the time.',
        description2: "When you're in our shop, you're family.",
        route: 'about.html',
        button: 'More about us',
        position: '',
    },
    {
        id: 1,
        image: 'assets/busy-coffee-shop.jpeg',
        imageAlt: 'Busy Shop',
        description1: 'Browse through our menu of delicious things that are guaranteed to make your day a little brighter.',
        description2: "From coffee to treats, we have something for everyone!",
        route: 'menu.html',
        button: 'Take a look',
        position: 'order-last order-md-first',
    },
    {
        id: 2,
        image: 'assets/steamed-milk.jpeg',
        imageAlt: 'Latte Pour',
        description1: 'Reward yourself and save with our membership program.',
        description2: "Everyone deserves free coffee.",
        route: 'memberships.html',
        button: 'Sign up today',
        position: '',
    }
]

export const MENU = [
    {
        id: 0,
        name: 'Breakfast',
        items: [
            {
                id: 0,
                name: 'Scrambled Egg Ciabatta',
                price: '$13.95'
            },
            {
                id: 1,
                name: 'Diced-Tomato Omelette (v)',
                price: '$11.95'
            },
            {
                id: 2,
                name: 'Lox Eggs Benedict',
                price: '$15.95'
            },
            {
                id: 3,
                name: 'Dairy-Free Coconut Yogurt Parfait',
                price: '$7.95'
            }
        ]
    },
    {
        id: 1,
        name: 'Lunch',
        items: [
            {
                id: 0,
                name: 'Chicken Pesto Sandwich',
                price: '$12.95'
            },
            {
                id: 1,
                name: 'Gluten-Free Avocado Toast (GF)',
                price: '$8.95'
            },
            {
                id: 2,
                name: 'Veggie Burger',
                price: '$10.95'
            },
            {
                id: 3,
                name: 'Caprese Salad (v)',
                price: '$8.95'
            }
        ]
    },
    {
        id: 2,
        name: 'Hot Drinks',
        items: [
            {
                id: 0,
                name: 'French Press Coffee',
                price: 'Sm $1.50, Med $2.00, Lg $2.50'
            },
            {
                id: 1,
                name: 'Cafe Latte',
                price: 'Sm $3.15, Med $3.75, Lg $4.15'
            },
            {
                id: 2,
                name: 'Cafe Mocha',
                price: 'Sm $3.15, Med $3.75, Lg $4.15'
            },
            {
                id: 3,
                name: 'Cappucino',
                price: 'Sm $2.00, Med $2.15, Lg $2.75'
            },
            {
                id: 4,
                name: 'Americano',
                price: 'Sm $2.50, Med $3.00, Lg $3.50'
            },
            {
                id: 5,
                name: 'Matcha Latte',
                price: 'Sm $3.15, Med $3.75, Lg $4.15'
            }
        ]
    },
    {
        id: 3,
        name: 'Iced Drinks',
        items: [
            {
                id: 0,
                name: 'Iced Coffee',
                price: 'Sm $2.00, Med $2.50, Lg $3.00'
            },
            {
                id: 1,
                name: 'Iced Mocha',
                price: 'Sm $2.15, Med $2.75, Lg $3.15'
            },
            {
                id: 2,
                name: 'Frappe',
                price: 'Sm $3.00, Med $3.50, Lg $4.00'
            },
            {
                id: 3,
                name: 'Iced Matcha Latte',
                price: 'Sm $3.15, Med $3.75, Lg $4.15'
            }
        ]
    }
]

export const SHOPS = [
    {
        id: 0,
        city: 'Los Angeles',
        street: '12345 State St.',
        zip: '90210',
        phone: '(555) 224-2938'
    },
    {
        id: 1,
        city: 'Irvine',
        street: '10275 1st St.',
        zip: '92610',
        phone: '(555) 234-5678'
    },
    {
        id: 2,
        city: 'Newport Beach',
        street: '375 Pacific Ave.',
        zip: '92178',
        phone: '(555) 209-1287'
    }
]

export const MAP_STYLES = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#aee2e0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#abce83"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#769E72"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7B8758"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#EBF4A4"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#8dab68"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#5B5B3F"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ABCE83"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#A4C67D"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#9BBF72"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#EBF4A4"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#87ae79"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f2200"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            },
            {
                "weight": 4.1
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#495421"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

export const MEMBERSHIPS = [
    {
        id: 0,
        name: 'Member',
        price: 'Free!',
        description1: 'Earn 1 point for every dollar you spend.',
        description2: 'PLUS, get one (1) free medium coffee every month.'
    },
    {
        id: 1,
        name: 'Silver Member',
        price: '$10/month',
        description1: 'Earn 1 point for every dollar you spend.',
        description2: 'PLUS, get one (1) free medium coffee every week.'
    },
    {
        id: 2,
        name: 'Gold Member',
        price: '$30/month',
        description1: 'Earn 2 points for every dollar you spend.',
        description2: 'PLUS, get one (1) free medium coffee every day.'
    }
]