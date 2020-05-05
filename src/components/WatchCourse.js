import React, { Fragment, useState, useEffect } from 'react';
import Request from '../util/httpRequest';
import {url} from '../util/baseUrl'
const request = new Request()
const WatchCourse = (props) => {
    const [course, setCourse] = useState(undefined)
    
    const getCourse = async ()=>{
        const { match: { params } } = props;
        const course = await request.get(`${url}courses/${params.id}`);
        setCourse(course)
    }

    useEffect(()=>{
        getCourse()
    }, [])
	return (
		<Fragment>
        {course && (
            <>
            <h1 className="course-title">{course.title}</h1>
			<div className="video-wrapper">
				<div className="video-container" id="video-container">
					<video controls id="video" preload="metadata" width="500" height="300">
						<source src={course.video} type="video/mp4" />
					</video>
				</div>
			</div>
            </>
        )}
			
		</Fragment>
	);
};

export default WatchCourse