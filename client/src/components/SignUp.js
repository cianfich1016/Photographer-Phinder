import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';

//this is a post



const photoType = [
    {
        value: 'Wedding',
        label: 'Wedding',
    },
    {
        value: 'Maternity',
        label: 'Maternity',
    },
    {
        value: 'Family',
        label: 'Family',
    },
    {
        value: 'HeadShot',
        label: 'HeadShot',
    },
    {
        value: 'Pet',
        label: 'Pet',
    },
    {
        value: 'Other',
        label: 'Other',
    },
];

const location = [
    {
        value: 'Alabama',
        label: 'Alabama',
    },
    {
        value: 'Alaska',
        label: 'Alaska',
    },
    {
        value: 'Arizona',
        label: 'Arizona',
    },
    {
        value: 'Arkansas',
        label: 'Arkansas',
    },
    {
        value: 'California',
        label: 'California',
    },
    {
        value: 'Colorado',
        label: 'Colorado',
    },
    {
        value: 'Connecticut',
        label: 'Connecticut',
    },
    {
        value: 'Delaware',
        label: 'Delaware',
    },
    {
        value: 'Florida',
        label: 'Florida',
    },
    {
        value: 'Georgia',
        label: 'Georgia',
    },
    {
        value: 'Idaho',
        label: 'Idaho',
    },
    {
        value: 'Illinois',
        label: 'Illinois',
    },
    {
        value: 'Indiana',
        label: 'Indiana',
    },
    {
        value: 'Iowa',
        label: 'Iowa',
    },
    {
        value: 'Kansas',
        label: 'Kansas',
    },
    {
        value: 'Kentucky',
        label: 'Kentucky',
    },
    {
        value: 'Maine',
        label: 'Maine',
    },
    {
        value: 'Maryland',
        label: 'Maryland',
    },
    {
        value: 'Massachusetts',
        label: 'Massachusetts',
    },
    {
        value: 'Michigan',
        label: 'Michigan',
    },
    {
        value: 'Minnesota',
        label: 'Minnesota',
    },
    {
        value: 'Mississippi',
        label: 'Mississippi',
    },
    {
        value: 'Missouri',
        label: 'Missouri',
    },
    {
        value: 'Montana',
        label: 'Montana',
    },
    {
        value: 'Nebraska',
        label: 'Nebraska',
    },
    {
        value: 'Nevada',
        label: 'Nevada',
    },
    {
        value: 'New Hampshire',
        label: 'New Hampshire',
    },
    {
        value: 'New Jersey',
        label: 'New Jersey',
    },
    {
        value: 'New Mexico',
        label: 'New Mexico',
    },
    {
        value: 'New York',
        label: 'New York',
    },
    {
        value: 'North Carolina',
        label: 'North Carolina',
    },
    {
        value: 'North Dakota',
        label: 'North Dakota',
    },
    {
        value: 'Ohio',
        label: 'Ohio',
    },
    {
        value: 'Oklahoma',
        label: 'Oklahoma',
    },
    {
        value: 'Oregon',
        label: 'Oregon',
    },
    {
        value: 'Pennsylvania',
        label: 'Pennsylvania',
    },
    {
        value: 'Rhode Island',
        label: 'Rhode Island',
    },
    {
        value: 'South Carolina',
        label: 'South Carolina',
    },
    {
        value: 'South Dakota',
        label: 'South Dakota',
    },
    {
        value: 'South Carolina',
        label: 'South Carolina',
    },
    {
        value: 'Tennessee',
        label: 'Tennessee',
    },
    {
        value: 'Texas',
        label: 'Texas',
    },
    {
        value: 'Utah',
        label: 'Utah',
    },
    {
        value: 'Vermont',
        label: 'Vermont',
    },
    {
        value: 'Virginia',
        label: 'Virginia',
    },
    {
        value: 'Washington',
        label: 'Washington',
    },
    {
        value: 'West Virginia',
        label: 'West Virginia',
    },
    {
        value: 'Wisconsin',
        label: 'Wisconsin',
    },
    {
        value: 'Wyoming',
        label: 'Wyoming',
    },
]
const SignUp = () => {
    const [photo, setPhoto] = React.useState('Wedding');

    const handleChange = (event) => {
        setPhoto(event.target.value);
    };

    const [location, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <Container>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Bio"
                        multiline
                        rows={4}
                        defaultValue="Tell us about you..."
                    />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={photoType}
                        onChange={handleChange}
                        helperText="Please select your specialty"
                    >
                        {photoType.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={location}
                        onChange={handleChange}
                        helperText="Please select your state"
                    >
                        {location.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </Box>
        </Container>
    )
}