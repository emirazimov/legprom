
import React, { useState } from 'react'
import { Create, SimpleForm, TextInput, ImageInput, ImageField, DateInput } from 'react-admin'

const PostCreate = (props) => {


    return (
        <Create title='Create a Post' {...props}>
            <SimpleForm>
            <TextInput source='id' />
                <TextInput source='title' />
                <DateInput source="published_at" />
                <TextInput multiline source='body' />

                <ImageInput multiline source="img" accept="image/*" >
                    <ImageField source="path" />
                </ImageInput>
                <TextInput multiline source='body2' />

                <ImageInput source="img2" accept="image/*" >
                    <ImageField source="path2" />
                </ImageInput>
                <TextInput multiline source='body3' />

                <ImageInput source="img3" accept="image/*" >
                    <ImageField source="path3" />
                </ImageInput>
                <TextInput multiline source='body4' />

                <ImageInput source="img4" accept="image/*" >
                    <ImageField source="path4" />
                </ImageInput>
                <TextInput multiline source='body5' />

                <ImageInput source="img5" accept="image/*" >
                    <ImageField source="path5" />
                </ImageInput>
                <TextInput multiline source='body6' />

                <ImageInput source="img6" accept="image/*" >
                    <ImageField source="path6" />
                </ImageInput>
                <TextInput multiline source='body7' />

                <ImageInput source="img7" accept="image/*" >
                    <ImageField source="path7" />
                </ImageInput>
                <TextInput multiline source='body8' />

                <ImageInput source="img8" accept="image/*" >
                    <ImageField source="path8" />
                </ImageInput>
                <TextInput multiline source='body9' />

                <ImageInput source="img9" accept="image/*" >
                    <ImageField source="path9" />
                </ImageInput>
                <TextInput multiline source='body10' />

                <ImageInput source="img10" accept="image/*" >
                    <ImageField source="path10" />
                </ImageInput>
                <TextInput multiline source='body11' />

                <ImageInput source="img11" accept="image/*" >
                    <ImageField source="path11" />
                </ImageInput>
                <TextInput multiline source='body12' />

                <ImageInput source="img12" accept="image/*" >
                    <ImageField source="path12" />
                </ImageInput>
                <TextInput multiline source='body13' />

                <ImageInput source="img13" accept="image/*" >
                    <ImageField source="path13" />
                </ImageInput>
                <TextInput multiline source='body14' />

                <ImageInput source="img14" accept="image/*" >
                    <ImageField source="path14" />
                </ImageInput>
                <TextInput multiline source='body15' />

                <ImageInput source="img15" accept="image/*" >
                    <ImageField source="path15" />
                </ImageInput>
                <TextInput multiline source='body16' />

                <ImageInput source="img16" accept="image/*" >
                    <ImageField source="path16" />
                </ImageInput>
                <TextInput multiline source='body17' />

                <ImageInput source="img17" accept="image/*" >
                    <ImageField source="path17" />
                </ImageInput>
                <TextInput multiline source='body18' />

                <ImageInput source="img18" accept="image/*" >
                    <ImageField source="path18" />
                </ImageInput>

            </SimpleForm>
        </Create>

    )
}

export default PostCreate 