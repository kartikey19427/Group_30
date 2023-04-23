from werkzeug.datastructures import ImmutableMultiDict

def transform(list1):
    name = list1.getlist('name')[0]
    about = list1.getlist('description')[0]
    skills = list1.getlist('skills')[0]
    courses = list1.getlist('courses')[0]
    educations = []
    experiences = []
    inst_list = list1.getlist('institute')
    deg_list = list1.getlist('degree')
    desc_list = list1.getlist('edu-description')
    comp_list = list1.getlist('company')
    pos_list = list1.getlist('position')
    month_list = list1.getlist('month')
    year_list = list1.getlist('year')
    for i in range(len(inst_list)):
        education = f"""Education(
                description={desc_list[i]},
                degree={deg_list[i]},
                institution_name={inst_list[i]})"""
        educations.append(education)
        
    for i in range(len(comp_list)):
        experience = f"""Experience(
                    position_title={pos_list[i]},
                    institution_name={comp_list[i]})"""
        experiences.append(experience)
        
    return "{name}\n\nAbout\n{about}\n\nExperience\n{exp}\n\nEducation\n{edu}\n\nSkills\n{skills}\n\nCourses\n{courses}".format(
            name=name,
            about=about,
            exp=experiences,
            edu=educations,
            skills=skills,
            courses=courses
        )
