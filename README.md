## Project Description

This CV/Resume web page is built with Next.js and designed to showcase your professional profile using various stylish layouts. The application uses a shared data definition to render your resume content consistently across different views—ranging from modern to classic styles. It is a solid foundation for demonstrating a sophisticated and responsive online resume.

Key Features:
- Multiple rendering styles: Switch effortlessly between various presentations of your resume.
- Containerized development: Leverage a Makefile with commands to configure, run, build, and interact with a Docker environment.
- Modern React optimizations: Built with Next.js for server and client performance improvements.
- Easily extensible: Adapt and expand the resume layout and data structure to best match your professional narrative.

## Getting Started

To begin, set up your development environment by cloning the repository and installing the dependencies:

```bash
# Clone the repository
git clone <repository-url>
cd docker-cv
make run
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the live preview. Modify the `app/page.tsx` file to edit the page—your changes will auto-update in the browser.

## Resume Data Format

The resume data is defined in a centralized format to ensure consistency across all display styles. This data model includes sections for:
- Professional experience and education
- Skills and certifications
- Projects and achievements
- Additional personal information

Each data field is formatted for easy updates, enabling seamless integration with various layout components. This structure supports both detailed and summary views, allowing you to customize how your profile is presented based on the context.

Extra Information:
- The project is bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
- Consider extending the resume data format by integrating new fields or customizing existing ones to better reflect your personal brand.
- Explore the Makefile commands for tasks such as linting, testing, and Docker interactions.

Happy Coding!
