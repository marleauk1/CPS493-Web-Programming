/* 
    Feed Model. The raw data for the feed display.
    Currently mocked at the client side.
*/ 

export const posts = [
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Nembrotha_aurea_B.jpg/1024px-Nembrotha_aurea_B.jpg',
        message: 'A sea slug',
        owner: {
            name: 'User Name',
            handle: 'userhandle',
            profilepic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chelidonura_varians.jpg/220px-Chelidonura_varians.jpg'
        },
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Glossodoris_atromarginata.jpg',
        message: 'Another sea slug',
        owner: {
            name: 'User Name',
            handle: 'userhandle',
            profilepic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chelidonura_varians.jpg/220px-Chelidonura_varians.jpg'
        },
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Felis_silvestris_catus_lying_on_rice_straw.jpg/1280px-Felis_silvestris_catus_lying_on_rice_straw.jpg',
        message: 'A cat',
        owner: {
            name: 'User Name',
            handle: 'userhandle',
            profilepic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/PSM_V37_D105_English_tabby_cat.jpg/1280px-PSM_V37_D105_English_tabby_cat.jpg'
        },
    },
];