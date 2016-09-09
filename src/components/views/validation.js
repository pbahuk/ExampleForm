const addressValidation = {
    pincode: '^[0-9]{6,6}$',
    locality: '^[A-Za-z0-9 -.,\.\(\)]{0,30}$',
    city: '^[A-Za-z0-9 -.,\.\(\)]{0,30}$',
    state: '^[A-Za-z0-9 -.,\.\(\)]{0,30}$',
    name: '^[A-Za-z0-9 ]{1,30}$',
    address: '^[A-Za-z0-9 \\-.\#,\\(\\)\/]{0,150}$',
    mobile: '[1-9][0-9]{9}',
}

export {addressValidation};