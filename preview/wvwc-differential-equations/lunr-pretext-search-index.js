var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   "
},
{
  "id": "author-bio-JEO",
  "level": "1",
  "url": "author-bio-JEO.html",
  "type": "Author Biography",
  "number": "",
  "title": "Author Biography",
  "body": " Go Seahawks.  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This document was created to serve as lecture notes for the Differential Equations course at West Virginia Wesleyan College. These notes are divided into two parts.   The first part, Ordinary Differential Equations , introduces differential equations in one variable along with methods for their solution and several applications.    The next part, Partial Differential Equations , introduces Fourier series and differential equations in several variables, building up to solving the heat and wave equations.   You can find a PDF version of these notes here .  This document is very much in progress and therefore typos and other errors are to be expected. If you find any, I would appreciate you letting me know by contacting me by email.  "
},
{
  "id": "section-ordinary-differential-equations",
  "level": "1",
  "url": "section-ordinary-differential-equations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Ordinary differential equations",
  "body": " Ordinary differential equations   This section introduces basic concepts from the field of differential equations.    Basic concepts  First, a definition of the primary concept in this course: the differential equation.   Differential equations  differential equations definition   A differential equation is an equation relating some function with its derivatives. A differential equation that involves a function of only one independent variable is called an ordinary differential equation , or ODE. A differential equation that involves a function of more than one independent variable (which you see a lot of in Calculus 3) is called a partial differential equation , or PDE, and will be studied in more detail in . The order of a differential equation is the highest derivative that appears in the equation.    Examples of ODEs:    ; this is a second order ODE relating the unknown function with its second derivative.     ; this is a seventh order ODE involving the derivatives of the unknown function . Note that in this ODE is the independent variable whereas serves as the dependent variable.     Just as with equations in algebra, we can sometimes solve a differential equation.   Solution of a differential equation  differential equations solution   A function is a solution of a differential equation if it satisfies the differential equation.    It is straightforward to check if a function is a solution of some given differential equation, but finding solutions will make up the bulk of this course.   Verifying solutions   Is a solution of the ODE ?    At this point we don't know how to solve differential equations, but that doesn't mean we can't check solutions of differential equations. To do so, we just plug wherever shows up in the ODE and see if the resulting equation is true. So we have This is a true statement, so satisfies the ODE. Hence is a solution of the ODE.    In , is not the only solution of . You can check that and are also solutions. In fact, any function of the form where is a constant is a solution of . See .   A family of solutions of .      Solutions of ODEs that depend on arbitrary constants, such as above, are called general solutions . Solutions of ODEs that do not depend on arbitrary constants, such as , are called particular solutions .   A trigonometric solution   Show that , where and are arbitrary constants, is a general solution of . Then find a particular solution.    To check that is a general solution of , we just need to plug it into the ODE and show that it satisfies it. Since this follows very quickly.  To find a particular solution, all we need to do in this case is to pick specific values for and (any values will work here). So one particular solution of is given by , among infinitely many others.    In , to find a particular solution we just needed to plug in specific values for the arbitrary constants. In general, the particular solutions we'll be interested in are chosen to satisfy a given condition, which we call an initial condition . These conditions often take the form . Geometrically, we are picking a specific point in the -plane that the solution must pass through.  An ODE together with an initial condition is called an initial value problem (IVP) . Although ODEs by themselves typically have infinitely many solutions, specifying an initial condition that the solution must satisfy is often enough to get a unique particular solution instead of a general solution.   Solving an IVP   Solve the IVP .    We need to find a function that satisfies two different constraints: and . We'll start with the first one, which we actually know how to do from Calculus I. If , then Now we need to make sure that is equal to if . We do this by setting , and choosing the right value for to make the resulting equation true: So the solution of this IVP is the function .    Two important things to keep in mind before we move to the next topic:   ODEs by themselves have general solutions, whereas IVPs have particular solutions.    When solving IVPs, it's important to keep track of any arbitrary constants that appear. Neglecting arbitrary constants usually makes it impossible to find the right particular solution.       Mathematical models  Differential equations are useful because they can provide a mathematical model of a physical quantity. Analyzing the model allows us to infer something meaningful about the quantity in question. A relatively simple model comes from Newton's Law of Cooling , which relates the temperature of an object with the temperature of the surrounding medium (such as air or water). In particular, Newton's Law of Cooling states that the time rate of change of the temperature of an object is proportional to the difference of the temperature of the object with that of the temperature of the surrounding medium.   Newton's Law of Cooling   Restate Newton's Law of Cooling as a differential equation.    It may not be obvious that Newton's Law of Cooling can be restated as a differential equation, but the phrase \"rate of change\" that appears in the statement of the law is a good clue that this can be done. To do this, first we need to give the relevant quantities (the temperature of the object and the temperature of the surrounding medium) names. Let denote the temperature of the object at time and let denote the temperature of the surrounding medium at time . Then Newton's Law of Cooling says that where is some constant.  Although we can't determine precisely (this would require experimentation and depends on the object and medium in question), we can still say something useful about it. In particular, must be negative. To see why, consider what the object does if and . If , then the object must be cooling since the surrounding medium is cooler than the object. If the object is cooling, then . On the other hand, if then since the object would be heating up in this case. The only way for this to occur is if .    Most of the mathematical models we'll look at will take the form of an IVP.   An IVP modeling a falling object   A ball weighing 0.5 is dropped from a height of 100 and is acted upon by gravity and air resistance. Assuming that the force of air resistance is proportional to the velocity of the ball, what is an IVP that models the movement of the ball?    What we need to do is to translate this physical situation into mathematics, and to do that we need to start assigning names to the quantities of interest. The quantities that matter in this problem are the movement of the ball, the force of gravity and the force of air resistance. We'll name them as follows: where is negative (since air resistance should act against velocity). To get a differential equation out of all this, we'll use Newton's Second Law (which is actually a second-order ODE in disguise). This says that the net force on the ball should be equal to its mass times acceleration: . So we have or just The initial condition in this case would be . So our IVP is     One quick note about the IVP in The differential equation was second-order, but there was only one corresponding initial condition. As we'll see later, this is not enough to find a unique solution to this IVP. For most IVPs we'll solve, we'll need as many initial conditions as the order of the ODE. Something to look forward to.    Now that we have a rough idea of what an ODE and an IVP actually are, we can move on to solving them. In the next section, we'll look at a method that we can use to visualize ODEs and their solutions and another method that can be used to approximate solutions of ODEs.   "
},
{
  "id": "definition-differential-equations",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#definition-differential-equations",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Differential equations.",
  "body": " Differential equations  differential equations definition   A differential equation is an equation relating some function with its derivatives. A differential equation that involves a function of only one independent variable is called an ordinary differential equation , or ODE. A differential equation that involves a function of more than one independent variable (which you see a lot of in Calculus 3) is called a partial differential equation , or PDE, and will be studied in more detail in . The order of a differential equation is the highest derivative that appears in the equation.   "
},
{
  "id": "definition-solution-of-a-differential-equation",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#definition-solution-of-a-differential-equation",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Solution of a differential equation.",
  "body": " Solution of a differential equation  differential equations solution   A function is a solution of a differential equation if it satisfies the differential equation.   "
},
{
  "id": "example-verifying-solutions",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#example-verifying-solutions",
  "type": "Example",
  "number": "1.1.3",
  "title": "Verifying solutions.",
  "body": " Verifying solutions   Is a solution of the ODE ?    At this point we don't know how to solve differential equations, but that doesn't mean we can't check solutions of differential equations. To do so, we just plug wherever shows up in the ODE and see if the resulting equation is true. So we have This is a true statement, so satisfies the ODE. Hence is a solution of the ODE.   "
},
{
  "id": "figure-family-of-solutions",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#figure-family-of-solutions",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " A family of solutions of .     "
},
{
  "id": "subsection-basic-concepts-for-odes-11",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#subsection-basic-concepts-for-odes-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solutions particular solutions "
},
{
  "id": "example-a-trigonometric-sol",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#example-a-trigonometric-sol",
  "type": "Example",
  "number": "1.1.5",
  "title": "A trigonometric solution.",
  "body": " A trigonometric solution   Show that , where and are arbitrary constants, is a general solution of . Then find a particular solution.    To check that is a general solution of , we just need to plug it into the ODE and show that it satisfies it. Since this follows very quickly.  To find a particular solution, all we need to do in this case is to pick specific values for and (any values will work here). So one particular solution of is given by , among infinitely many others.   "
},
{
  "id": "subsection-basic-concepts-for-odes-13",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#subsection-basic-concepts-for-odes-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial condition "
},
{
  "id": "subsection-basic-concepts-for-odes-14",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#subsection-basic-concepts-for-odes-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial value problem (IVP) "
},
{
  "id": "example-solving-an-ivp",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#example-solving-an-ivp",
  "type": "Example",
  "number": "1.1.6",
  "title": "Solving an IVP.",
  "body": " Solving an IVP   Solve the IVP .    We need to find a function that satisfies two different constraints: and . We'll start with the first one, which we actually know how to do from Calculus I. If , then Now we need to make sure that is equal to if . We do this by setting , and choosing the right value for to make the resulting equation true: So the solution of this IVP is the function .   "
},
{
  "id": "subsection-mathematical-models-2",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#subsection-mathematical-models-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton's Law of Cooling "
},
{
  "id": "example-newton-s-law-of-cooling",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#example-newton-s-law-of-cooling",
  "type": "Example",
  "number": "1.1.7",
  "title": "Newton’s Law of Cooling.",
  "body": " Newton's Law of Cooling   Restate Newton's Law of Cooling as a differential equation.    It may not be obvious that Newton's Law of Cooling can be restated as a differential equation, but the phrase \"rate of change\" that appears in the statement of the law is a good clue that this can be done. To do this, first we need to give the relevant quantities (the temperature of the object and the temperature of the surrounding medium) names. Let denote the temperature of the object at time and let denote the temperature of the surrounding medium at time . Then Newton's Law of Cooling says that where is some constant.  Although we can't determine precisely (this would require experimentation and depends on the object and medium in question), we can still say something useful about it. In particular, must be negative. To see why, consider what the object does if and . If , then the object must be cooling since the surrounding medium is cooler than the object. If the object is cooling, then . On the other hand, if then since the object would be heating up in this case. The only way for this to occur is if .   "
},
{
  "id": "example-an-ivp-modeling-a-falling-object",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#example-an-ivp-modeling-a-falling-object",
  "type": "Example",
  "number": "1.1.8",
  "title": "An IVP modeling a falling object.",
  "body": " An IVP modeling a falling object   A ball weighing 0.5 is dropped from a height of 100 and is acted upon by gravity and air resistance. Assuming that the force of air resistance is proportional to the velocity of the ball, what is an IVP that models the movement of the ball?    What we need to do is to translate this physical situation into mathematics, and to do that we need to start assigning names to the quantities of interest. The quantities that matter in this problem are the movement of the ball, the force of gravity and the force of air resistance. We'll name them as follows: where is negative (since air resistance should act against velocity). To get a differential equation out of all this, we'll use Newton's Second Law (which is actually a second-order ODE in disguise). This says that the net force on the ball should be equal to its mass times acceleration: . So we have or just The initial condition in this case would be . So our IVP is    "
},
{
  "id": "section-direction-fields",
  "level": "1",
  "url": "section-direction-fields.html",
  "type": "Section",
  "number": "1.2",
  "title": "Direction fields",
  "body": " Direction fields   Differential equations can often be quite difficult to solve, if not impossible. In this section we will discuss a method to visualize the behavior of certain first-order differential equations without first solving them. This approach, the direction field or slope field , is one that we will use again in .    Direction fields and solution curves  Suppose we wanted to solve the ODE . Then we can do so using the tools already available to us, since the mystery function must have derivative given by . So Any choice for yields another solution of the ODE .   Again, it's very important in this course not to forget the arbitrary constant !   Now let's make things a little more interesting. Suppose we wanted to solve the ODE . Then this is impossible to do in a single \"closed-form\".   By closed-form we basically mean in terms of the usual exponential, trigonometric and polynomial functions, as well as their inverses.   This is because solving this ODE requires integrating , which as you may remember from Calculus 2 cannot be done without resorting to something like power series. Even if we can't solve the ODE, or if we can't solve it easily, we still want to be able to obtain some information from it. One way to do this is by using direction fields , which is a graphical representation of the ODE.  To construct a direction field for an ODE of the form perform the following steps:  Pick a point in the -plane.  Plug the point into to obtain the number .  Plot a short line segment with slope at the point .  Repeat at several other points in the -plane until you develop a satisfactory picture of the behavior of the ODE.  The resulting graph is called the direction field for the ODE.   Direction fields are often called slope fields.    Plotting a direction field by hand   Fill in the direction field for at the indicated points:   Graph for hand plot of direction field.        To plot the direction field, remember that we're basically plotting slopes . So we first need to figure out at the indicated points. The following table lists values for at some of these points:   Slopes of                         If we fill out the remaining values of and plot the corresponding slopes, we should get something like this:   Direction field of         Plotting a direction field with a CAS   Plot the direction field for the differential equation , where .    We can easily do this with a computer system (such as Sage!). For example, try running the cell below this example. If we do so, we get something like the following diagram:   Direction field for         Direction fields are useful because they provide a means to obtain information about a differential equation (and the corresponding model) without actually having to solve the differential equation. One way to do so is to create a streamline plot . This can be done easily in Sage, like so:   This can also be created by hand from a slope field without too much trouble.  If we only graph a single curve in the direction field we get what's known as a solution curve , which represents a solution of an initial value problem corresponding to the ODE the direction field is drawn from.   Information from a solution curve   Let represent the solution of the initial value problem Determine .    Since we don't know how to solve this IVP yet, we'll make use of the direction field from to find an approximate solution curve. Since the initial condition is , this means that the solution must pass through the point . So if we start at this point and trace a curve that flows with the direction field, we get the following solution curve:   The solution curve corresponding to the initial condition      So it appears that .     "
},
{
  "id": "subsection-direction-fields-and-solution-curves-6",
  "level": "2",
  "url": "section-direction-fields.html#subsection-direction-fields-and-solution-curves-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direction fields "
},
{
  "id": "example-plotting-a-direction-field-by-hand",
  "level": "2",
  "url": "section-direction-fields.html#example-plotting-a-direction-field-by-hand",
  "type": "Example",
  "number": "1.2.1",
  "title": "Plotting a direction field by hand.",
  "body": " Plotting a direction field by hand   Fill in the direction field for at the indicated points:   Graph for hand plot of direction field.        To plot the direction field, remember that we're basically plotting slopes . So we first need to figure out at the indicated points. The following table lists values for at some of these points:   Slopes of                         If we fill out the remaining values of and plot the corresponding slopes, we should get something like this:   Direction field of       "
},
{
  "id": "example-plotting-a-direction-field-with-a-cas",
  "level": "2",
  "url": "section-direction-fields.html#example-plotting-a-direction-field-with-a-cas",
  "type": "Example",
  "number": "1.2.5",
  "title": "Plotting a direction field with a CAS.",
  "body": " Plotting a direction field with a CAS   Plot the direction field for the differential equation , where .    We can easily do this with a computer system (such as Sage!). For example, try running the cell below this example. If we do so, we get something like the following diagram:   Direction field for       "
},
{
  "id": "subsection-direction-fields-and-solution-curves-15",
  "level": "2",
  "url": "section-direction-fields.html#subsection-direction-fields-and-solution-curves-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution curve "
},
{
  "id": "example-information-from-a-solution-curve",
  "level": "2",
  "url": "section-direction-fields.html#example-information-from-a-solution-curve",
  "type": "Example",
  "number": "1.2.7",
  "title": "Information from a solution curve.",
  "body": " Information from a solution curve   Let represent the solution of the initial value problem Determine .    Since we don't know how to solve this IVP yet, we'll make use of the direction field from to find an approximate solution curve. Since the initial condition is , this means that the solution must pass through the point . So if we start at this point and trace a curve that flows with the direction field, we get the following solution curve:   The solution curve corresponding to the initial condition      So it appears that .   "
},
{
  "id": "section-separable-odes-and-substitution",
  "level": "1",
  "url": "section-separable-odes-and-substitution.html",
  "type": "Section",
  "number": "1.3",
  "title": "Separable ODEs and substitution",
  "body": " Separable ODEs and substitution   This section corresponds to Section 1.3 from the text.    Separable ODEs  The simplest ODEs to solve are the first-order ODEs of the form . The Fundamental Theorem of Calculus guarantees that the solution is given by .   Rather, the Fundamental Theorem of Calculus guarantees that the solution will be as long as is a continuous function.   Another type of ODE that is relatively straightforward to solve is the separable ODE , which is a first-order ODE that can be written in the form These ODEs can be solved by integration as well, but only after some rearranging.   Solving a separable ODE   Solve the IVP given by .    The first step to solving this IVP is to solve the ODE . It may not look like it at first, but this ODE is separable since we can rewrite it as . To solve this ODE, we need to move the terms to the left hand side of the equation and the terms to the right hand side. We'll abuse notation a little bit to do so by rewriting and treating as a fraction, but it won't get us into too much trouble here: .  At this step we can either leave the solution as is (in implicit form ) or solve for to get an explicit form . We'll leave this in implicit form and then plug in the initial condition to get So the implicit solution of this IVP is given by      Newton's Law of Cooling again   A metal plate is removed from an oven and placed in a room. The temperature of the plate is Celsius and the temperature of the room is fixed at Celsius. After minutes the temperature of the plate drops to Celsius. How hot is the plate after five hours?    Let denote the temperature of the plate minutes after being removed from the oven and let denote the temperature of the room minutes after the plate is removed from the oven. Then and Newton's Law of Cooling says that .  To answer this question we need to find , and although we don't know at the moment we can still make some progress just by remembering that it's a constant. This ODE is separable, so we'll separate variables and integrate both sides to get which simplifies to or just .  Now we need to find and . To find , we just use the initial condition to get . The only piece of information that we have left to find is the fact that the temperature of the plate drops to after minutes. In other words, . Therefore which becomes . Therefore   So, finally, and the temperature after five hours is .      Substitution methods  At this point we can only solve a couple types of differential equations. An ODE that isn't of the form or separable may prove troublesome. However, there are certain cases where we can rewrite an ODE into one of these forms by using the right substitution.   Substitution to solve an ODE   Find the general solution of .    This ODE is not separable and we can't just integrate it (since the right hand side depends on the dependent variable). However, the form of the right hand side suggests a substitution: . This would simplify things quite a bit, leaving us with . The only problem with this is that depends on , not . We must rewrite in terms of the new variable , which isn't too bad. Since , we get . Therefore the ODE becomes   This new ODE is separable, and so we separate variables and integrate to get . If we don't care about finding an explicit solution, then we can just replace to get the equation back in terms of . So our (implicit) general solution is .     A less obvious substitution   Find an explicit solution of .    It's tough to see what to do right away, so we'll try simplifying the ODE first. In particular, we'll solve for to get If we stare at this for a while, we might convince ourselves that the right hand side really just depends on , so we'll try replacing that with . Then the ODE becomes .  Once again, this is much simpler but we need to rewrite in terms of . Since , this means that and so . Then the ODE becomes .  This new ODE can be rearranged to get , and so . Getting back in terms of , we have or just .     "
},
{
  "id": "subsection-separable-odes-4",
  "level": "2",
  "url": "section-separable-odes-and-substitution.html#subsection-separable-odes-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separable ODE "
},
{
  "id": "example-solving-a-separable-ode",
  "level": "2",
  "url": "section-separable-odes-and-substitution.html#example-solving-a-separable-ode",
  "type": "Example",
  "number": "1.3.1",
  "title": "Solving a separable ODE.",
  "body": " Solving a separable ODE   Solve the IVP given by .    The first step to solving this IVP is to solve the ODE . It may not look like it at first, but this ODE is separable since we can rewrite it as . To solve this ODE, we need to move the terms to the left hand side of the equation and the terms to the right hand side. We'll abuse notation a little bit to do so by rewriting and treating as a fraction, but it won't get us into too much trouble here: .  At this step we can either leave the solution as is (in implicit form ) or solve for to get an explicit form . We'll leave this in implicit form and then plug in the initial condition to get So the implicit solution of this IVP is given by    "
},
{
  "id": "example-newton-s-law-of-cooling-again",
  "level": "2",
  "url": "section-separable-odes-and-substitution.html#example-newton-s-law-of-cooling-again",
  "type": "Example",
  "number": "1.3.2",
  "title": "Newton’s Law of Cooling again.",
  "body": " Newton's Law of Cooling again   A metal plate is removed from an oven and placed in a room. The temperature of the plate is Celsius and the temperature of the room is fixed at Celsius. After minutes the temperature of the plate drops to Celsius. How hot is the plate after five hours?    Let denote the temperature of the plate minutes after being removed from the oven and let denote the temperature of the room minutes after the plate is removed from the oven. Then and Newton's Law of Cooling says that .  To answer this question we need to find , and although we don't know at the moment we can still make some progress just by remembering that it's a constant. This ODE is separable, so we'll separate variables and integrate both sides to get which simplifies to or just .  Now we need to find and . To find , we just use the initial condition to get . The only piece of information that we have left to find is the fact that the temperature of the plate drops to after minutes. In other words, . Therefore which becomes . Therefore   So, finally, and the temperature after five hours is .   "
},
{
  "id": "example-substitution-to-solve-an-ode",
  "level": "2",
  "url": "section-separable-odes-and-substitution.html#example-substitution-to-solve-an-ode",
  "type": "Example",
  "number": "1.3.3",
  "title": "Substitution to solve an ODE.",
  "body": " Substitution to solve an ODE   Find the general solution of .    This ODE is not separable and we can't just integrate it (since the right hand side depends on the dependent variable). However, the form of the right hand side suggests a substitution: . This would simplify things quite a bit, leaving us with . The only problem with this is that depends on , not . We must rewrite in terms of the new variable , which isn't too bad. Since , we get . Therefore the ODE becomes   This new ODE is separable, and so we separate variables and integrate to get . If we don't care about finding an explicit solution, then we can just replace to get the equation back in terms of . So our (implicit) general solution is .   "
},
{
  "id": "example-a-less-obvious-substitution",
  "level": "2",
  "url": "section-separable-odes-and-substitution.html#example-a-less-obvious-substitution",
  "type": "Example",
  "number": "1.3.4",
  "title": "A less obvious substitution.",
  "body": " A less obvious substitution   Find an explicit solution of .    It's tough to see what to do right away, so we'll try simplifying the ODE first. In particular, we'll solve for to get If we stare at this for a while, we might convince ourselves that the right hand side really just depends on , so we'll try replacing that with . Then the ODE becomes .  Once again, this is much simpler but we need to rewrite in terms of . Since , this means that and so . Then the ODE becomes .  This new ODE can be rearranged to get , and so . Getting back in terms of , we have or just .   "
},
{
  "id": "section-first-order-linear-odes",
  "level": "1",
  "url": "section-first-order-linear-odes.html",
  "type": "Section",
  "number": "1.4",
  "title": "First-order linear ODEs",
  "body": " First-order linear ODEs   In this section we introduce a new type of ODE that we can solve, in addition to separable ODEs and \"simple\" ODEs of the form . The ODEs that we'll consider in this section are first-order linear ODEs .   First-order linear ODEs  first-order ODEs first-order linear ODEs   A first-order ODE is said to be linear if it can be written in the following form:     We've actually seen such an ODE all the way back in . The ODE that we came up with in that problem can be rewritten as a first-order linear ODE with the right substitution (say, ). Our first goal in this section is then to figure out how to solve these ODEs.  Note that this section corresponds to Section 1.5 from the text.    Integrating factors  To get a sense of how to solve first-order linear ODEs, we'll try some relatively simple examples first.   Solving a first-order linear ODE   Find the general solution of .    First, note that the ODE is indeed a first-order linear ODE since it takes the form given in . If we stare at the ODE for a bit, we might think that the left hand side looks like something we'd get after using the product rule. Just compare with , and it appears that the unknown function is taking the place of in the product rule formula. If we could just figure out what the function is supposed to be, then we could drastically simplify the left hand side of the ODE.  Unfortunately, there is no such function that works here. If there were, we'd have to have and , and clearly we aren't multiplying by in the ODE. But we can pull a dirty trick here! We'll multiply through the ODE by to get the new ODE It might not be all that obvious why this helps us out, but now the left hand side can be simplified by the product rule:   So we can rewrite the entire ODE as We can integrate this on both sides to get , or just The explicit solution would be .    The function that we used in is called an integrating factor . Integrating factors are our primary tool in solving first-order linear ODEs. In general, to solve a first-order linear ODE the first thing you must do is to multiply through it by the integrating factor .   Solving a first-order linear ODE in disguise   Solve the second-order ODE given by with initial conditions     Even though this is a second-order ODE, we can rewrite it as a first-order ODE using the substitution . Then the ODE becomes If we divide through by , we get This can be solved by integrating factors since it takes the form given in . The integrating factor we need is given by   Now we multiply through the ODE by this integrating factor and rewrite the left hand side using the product rule to get At this step we can integrate both sides to get which becomes   If we plug in the initial condition , this forces . Hence Now we integrate one last time to get : If we use the last initial condition , we see that . Hence the solution of this IVP is       Applications  A common application of first-order linear ODEs is in modeling \"mixture\" problems. Suppose we have a tank which contains a solution (mixture of solute and solvent, such as salt and water). Some amount of solution is also flowing into and out of the tank. We want to measure the amount of solute in the tank at time , call this amount . Then will change depending on how the solute flows into and out of the tank, making it a prime target for a differential equation.  If we set then we can say that where is the volume of solution in the tank at time . Furthermore, if we let denote the initial volume of the solution in the tank then we can say that Hence the amount of solute obeys the first-order linear ODE    We assume that are all constant.    Salt in a tank   A tank contains 100 of a solution consisting of 50 of salt dissolved in water. Solution containing 1 of salt is pumped into the tank at a rate of 2 and the well-mixed solution is pumped out at the rate of 3 . How much salt will be in the tank after minutes?    Let denote the amount of salt in the tank after minutes, so . Then We can rearrange this to get This ODE is linear and has integrating factor . Multiplying through the ODE by the integrating factor and rewriting it using the product rule then gives us   Now we can integrate both sides to get or just . Finally, the initial condition can be used to show that , so .     "
},
{
  "id": "section-first-order-linear-odes-2-1",
  "level": "2",
  "url": "section-first-order-linear-odes.html#section-first-order-linear-odes-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first-order linear ODEs "
},
{
  "id": "definition-first-order-linear-odes",
  "level": "2",
  "url": "section-first-order-linear-odes.html#definition-first-order-linear-odes",
  "type": "Definition",
  "number": "1.4.1",
  "title": "First-order linear ODEs.",
  "body": " First-order linear ODEs  first-order ODEs first-order linear ODEs   A first-order ODE is said to be linear if it can be written in the following form:    "
},
{
  "id": "example-solving-a-first-order-linear-ode",
  "level": "2",
  "url": "section-first-order-linear-odes.html#example-solving-a-first-order-linear-ode",
  "type": "Example",
  "number": "1.4.2",
  "title": "Solving a first-order linear ODE.",
  "body": " Solving a first-order linear ODE   Find the general solution of .    First, note that the ODE is indeed a first-order linear ODE since it takes the form given in . If we stare at the ODE for a bit, we might think that the left hand side looks like something we'd get after using the product rule. Just compare with , and it appears that the unknown function is taking the place of in the product rule formula. If we could just figure out what the function is supposed to be, then we could drastically simplify the left hand side of the ODE.  Unfortunately, there is no such function that works here. If there were, we'd have to have and , and clearly we aren't multiplying by in the ODE. But we can pull a dirty trick here! We'll multiply through the ODE by to get the new ODE It might not be all that obvious why this helps us out, but now the left hand side can be simplified by the product rule:   So we can rewrite the entire ODE as We can integrate this on both sides to get , or just The explicit solution would be .   "
},
{
  "id": "subsection-integrating-factors-4",
  "level": "2",
  "url": "section-first-order-linear-odes.html#subsection-integrating-factors-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "example-solving-a-first-order-linear-ode-in-disguise",
  "level": "2",
  "url": "section-first-order-linear-odes.html#example-solving-a-first-order-linear-ode-in-disguise",
  "type": "Example",
  "number": "1.4.3",
  "title": "Solving a first-order linear ODE in disguise.",
  "body": " Solving a first-order linear ODE in disguise   Solve the second-order ODE given by with initial conditions     Even though this is a second-order ODE, we can rewrite it as a first-order ODE using the substitution . Then the ODE becomes If we divide through by , we get This can be solved by integrating factors since it takes the form given in . The integrating factor we need is given by   Now we multiply through the ODE by this integrating factor and rewrite the left hand side using the product rule to get At this step we can integrate both sides to get which becomes   If we plug in the initial condition , this forces . Hence Now we integrate one last time to get : If we use the last initial condition , we see that . Hence the solution of this IVP is    "
},
{
  "id": "example-salt-in-a-tank",
  "level": "2",
  "url": "section-first-order-linear-odes.html#example-salt-in-a-tank",
  "type": "Example",
  "number": "1.4.4",
  "title": "Salt in a tank.",
  "body": " Salt in a tank   A tank contains 100 of a solution consisting of 50 of salt dissolved in water. Solution containing 1 of salt is pumped into the tank at a rate of 2 and the well-mixed solution is pumped out at the rate of 3 . How much salt will be in the tank after minutes?    Let denote the amount of salt in the tank after minutes, so . Then We can rearrange this to get This ODE is linear and has integrating factor . Multiplying through the ODE by the integrating factor and rewriting it using the product rule then gives us   Now we can integrate both sides to get or just . Finally, the initial condition can be used to show that , so .   "
},
{
  "id": "section-existence-and-uniqueness-of-solutions",
  "level": "1",
  "url": "section-existence-and-uniqueness-of-solutions.html",
  "type": "Section",
  "number": "1.5",
  "title": "Existence and uniqueness of solutions",
  "body": " Existence and uniqueness of solutions  Existence and uniqueness   Now that we have seen how to solve several different types of differential equations, we will move on to the more general problem of determining when a given differential equation is actually solvable. This section is, therefore, a little unusual in that we don't actually care about solving the differential equations presented. Despite this, many important differential equations in practice have no closed-form solutions and so the best we can often do is approximate solutions. Hence, it will be useful to know when exactly a solution exists in order to justify our approximations. At the end of the section we will examine two approaches to approximating solutions of differential equations.    Existence and uniqueness for linear differential equations  Recall that a first-order linear ordinary differential equation is one that can be written in the form . For such equations, we have the following relatively simple test for existence and uniqueness.    Consider the initial value problem given by and let be an open interval on which and are both continuous, with . Then the initial value problem has a unique solution.      Existence and uniqueness theorem  There are two important questions we need to consider when developing a mathematical model using differential equations (i.e. IVPs):  Does the initial value problem have a solution? (Existence).  If it has a solution, is the solution unique? (Uniqueness).  Ideally, the answer to both of these questions will be yes.   The answer is no   Does have a unique solution?    We can find a solution to this IVP by treating the ODE as separable. If we do so, we find that . On the other hand, we can also eyeball a second solution: . So this IVP has two different solutions: and .    Clearly, IVPs don't always have unique solutions. Sometimes it's difficult to determine precisely when an IVP can have a unique solution, but most of the cases we'll care about in this class will fall under the following theorem.   Existence and uniqueness theorem  first-order ODEs existence and uniqueness   Consider the IVP given by . If is bounded and continuous within some rectangle in the plane containing , then the IVP has at least one solution. If in addition is also bounded and continuous within some rectangle containing , then the IVP has a unique solution.    If we go back to , then we see that has something to say about the IVP in that example. In that example, we had and . Let's draw a rectangle around this point:   A rectangle around      Now is continuous and within this rectangle, so everywhere inside of this triangle. So guarantees at least one solution of the IVP, and indeed there is at least one solution. However, the problem with uniqueness stems from the fact that has a divide-by-zero problem inside this rectangle. Furthermore, it's impossible to draw a rectangle around that avoids this divide-by-zero problem. Hence there is no guarantee of uniqueness.  On the other hand, if we changed the initial condition to then we would be guaranteed a unique solution. Moving that initial condition off of the -axis is all we need to do to guarantee uniqueness.    Picard iteration  Now that we know of a way to determine whether or not certain ODEs have solutions, we'd like a method for actually finding these solutions. We've seen a few different methods for solving specific first-order ODEs, but what we'll do now is discuss a method that works for a large class of first-order ODEs. The only catch is that it may take us an infinite amount of time to get the solution.  Consider the IVP . We can rewrite this differential equation as an integral equation : It looks quite a bit different, but solutions of this integral equation are also solutions of the corresponding differential equation. Our goal now is to approximate a solution to this integral equation.  To start, let's make a guess as to what the solution of our IVP should be. To keep things simple we'll start with a constant function, say so that we at least satisfy the initial condition. Now this guess may not be a good match for the solution of the IVP away from the initial condition, so we'll adjust the guess using the integral equation to get the new function : Now may not be a great approximation either away from the initial condition, but we can adjust it using the integral equation just like we did to .  The method described in the previous paragraph is Picard's Method . In general, the iteration of Picard's Method is given by and the first iterate is the constant function It may seem strange to consider these functions as approximate solutions of the IVP in question, but each iterate actually solves an IVP very similar to the one that we care about, . In particular, for all . This method doesn't always work, but if satisfies the conditions given in then this method will (after potentially infinitely many steps) provide a solution to the IVP. Since the computations involved are quite tedious, it's best to use a CAS if possible.   Using Sage to compute Picard iterates   Consider the initial value problem given by . We want to approximate the solution by using Picard iteration (note that the differential equation is neither separable nor linear!). We do this with the Sage cell below:       Euler's method  The Picard iteration approach can be useful for finding series approximations of the solution of an ODE. If a more numerical approach is desired, then Euler's method might be useful. Euler's method can be thought of as an algorithmic version of tracing a solution curve through a direction field (see ).   Euler's method   Consider the initial value problem The equations defining Euler's method for a given step size are .    For Euler's method, the general rule of thumb is as follows: the smaller is, the better the approximation. However, one should expect degrading performance as the method moves farther from the initial condition .   Euler's method applied to a nonlinear ODE   Let denote the solution of the IVP given by . Estimate using Euler's method with a step size of .    First, note that we are justified in saying the solution exists at all by . Euler's method now produces the following approximations:                                                                      Such computations are best performed using a CAS, such as the Sage code below:      "
},
{
  "id": "thm-existence-uniqueness-first-order-linear",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#thm-existence-uniqueness-first-order-linear",
  "type": "Theorem",
  "number": "1.5.1",
  "title": "",
  "body": "  Consider the initial value problem given by and let be an open interval on which and are both continuous, with . Then the initial value problem has a unique solution.   "
},
{
  "id": "example-the-answer-is-no",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#example-the-answer-is-no",
  "type": "Example",
  "number": "1.5.2",
  "title": "The answer is no.",
  "body": " The answer is no   Does have a unique solution?    We can find a solution to this IVP by treating the ODE as separable. If we do so, we find that . On the other hand, we can also eyeball a second solution: . So this IVP has two different solutions: and .   "
},
{
  "id": "theorem-existence-and-uniqueness-theorem",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#theorem-existence-and-uniqueness-theorem",
  "type": "Theorem",
  "number": "1.5.3",
  "title": "Existence and uniqueness theorem.",
  "body": " Existence and uniqueness theorem  first-order ODEs existence and uniqueness   Consider the IVP given by . If is bounded and continuous within some rectangle in the plane containing , then the IVP has at least one solution. If in addition is also bounded and continuous within some rectangle containing , then the IVP has a unique solution.   "
},
{
  "id": "figure-existence-and-uniqueness-1",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#figure-existence-and-uniqueness-1",
  "type": "Figure",
  "number": "1.5.4",
  "title": "",
  "body": " A rectangle around     "
},
{
  "id": "subsection-picard-iteration-3",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#subsection-picard-iteration-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral equation "
},
{
  "id": "subsection-picard-iteration-5",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#subsection-picard-iteration-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Picard's Method "
},
{
  "id": "example-using-sage-to-compute-picard-iterates",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#example-using-sage-to-compute-picard-iterates",
  "type": "Example",
  "number": "1.5.5",
  "title": "Using Sage to compute Picard iterates.",
  "body": " Using Sage to compute Picard iterates   Consider the initial value problem given by . We want to approximate the solution by using Picard iteration (note that the differential equation is neither separable nor linear!). We do this with the Sage cell below:    "
},
{
  "id": "algorithm-euler-s-method",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#algorithm-euler-s-method",
  "type": "Algorithm",
  "number": "1.5.6",
  "title": "Euler’s method.",
  "body": " Euler's method   Consider the initial value problem The equations defining Euler's method for a given step size are .   "
},
{
  "id": "example-euler-s-method-applied-to-nonlinear-ode",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#example-euler-s-method-applied-to-nonlinear-ode",
  "type": "Example",
  "number": "1.5.7",
  "title": "Euler’s method applied to a nonlinear ODE.",
  "body": " Euler's method applied to a nonlinear ODE   Let denote the solution of the IVP given by . Estimate using Euler's method with a step size of .    First, note that we are justified in saying the solution exists at all by . Euler's method now produces the following approximations:                                                                      Such computations are best performed using a CAS, such as the Sage code below:    "
},
{
  "id": "section-population-models-and-autonomous-equations",
  "level": "1",
  "url": "section-population-models-and-autonomous-equations.html",
  "type": "Section",
  "number": "1.6",
  "title": "Population models and autonomous equations",
  "body": " Population models and autonomous equations  Autonomous Equations   Population models  Suppose we're monitoring the population of some species, and let's denote the population at time by . An obvious question to consider is how that population will change over time. Mathematically, this means we want to obtain information on and then use it to estimate .  A simple model for is to assume it depends only on the birth rate and death rate of the species in question. Then we can write If we assume that are constants, then this equation is separable and we can solve it to obtain where represents the \"initial population\", or population at time . We call the natural growth equation .  The natural growth equation is simple, but it's probably too simple to be useful expect in certain scenarios (such as measuring half-life). To get a more flexible model, we can generalize by assuming that the birth and death rates are actually functions of time. This gives us the general population equation .   General population equation   The general population equation for a population is given by      Population explosion   A population has members at time years with a death rate of and a birth rate of , where denotes the population after years. Find and determine if this is a reasonable population model.    If we assume that the population obeys the general growth equation, then we get This ODE is separable, and we can therefore solve it to get   So we have a solution, and furthermore guarantees that the solution is unique. But if you stare at this for a bit, you might see that it has a divide-by-zero problem. In particular, In other words, the population becomes infinite in about two weeks!      The logistic equation   shows that we need to be more careful with our assumptions on population growth. One relatively simple assumption we can make is to assume that the birth rate decreases as population increases. This makes sense in the physical world as well: as population increases, existing and finite resources (such as food) must be shared between more and more members of the population. Since there's less to go around, we should expect growth to slow down. In particular, let's assume that where and are all positive constants. Then the population equation for this scenario becomes   With a little algebra, we get the logistic equation : for constants and . This equation is separable, and can be solved using partial fractions to obtain where . In order to verify the reasonableness of our logistic model, let's see what happens to the population as time increases.   Long-term behavior of logistic growth   What is the long-term population of a species that grows according to the logistic equation ?    Using the fact that we have So the population should eventually level out at .    In the logistic equation , the value is the carrying capacity , and denotes the maximum sustainable population according to the model.   Population growth in the USA   In millions, the population of the USA in 1990 was and was growing at a rate of per year. In 2012, the population was and was growing at a rate of per year. Assuming that the population of the USA grows logistically, estimate the population of the USA in 2017 and compare it to the current estimate of .    Let denote the population of the USA (in millions), where is the number of years after 1990. Then and So we need to find and .  When , we have and . Similarly, when we have and . Therefore Solving this system gives us and . Hence   This model estimates the population in 2017 to be which is about a error. Note also that this model predicts the carrying capacity of the USA to be .      Stability of solutions  The logistic equation is a particularly nice separable ODE since the right hand side depends only on the unknown function . So we can write , where . ODEs like this (where the independent variable does not appear explicitly) are called autonomous ODEs .  Autonomous ODEs like are useful because the behavior of their solutions can be determined qualitatively , without actually solving the ODE. This is done by looking for the constant solutions of the ODE, that is, solutions of the form . For any such solution, we must have as well. These solutions (i.e., the solutions of ) are called the critical points or equilibrium solutions of the ODE. These solutions completely determine the long-term behavior of every other solution .   Finding equilibrium solutions   Find the equilibrium solutions of .    We need to solve the equation . Thankfully, we can factor this to get , and so the equilibrium solutions are .     Stability of solutions   A critical point is stable if solutions that start \"near\" the point stay near it. A critical point is unstable if solutions that start \"near\" the point can diverge away from it.     Determining the stability of solutions   What are the stable critical points of ?    We already know that the critical points are . We can determine their stability by making use of a phase diagram , which is essentially a sign chart for :   The phase diagram for      This shows us that solutions that begin near tend to move away from , which solutions near tend to move towards . So is unstable and is stable.     Determining a sustainable population   Consider a population of fish that obeys the logistic equation where is the population of fish (in thousands) after years. Suppose that the population is also harvested at some rate (in thousands per year). What is the maximum sustainable rate of harvesting?    To account for the harvesting, we need to modify the ODE: The harvesting will be sustainable as long as the population does not become extinct. To determine this long term behavior, we'll find the critical points and set up a phase diagram.  The critical points are given by by the quadratic formula. We now have three cases to consider: In terms of , these reduce to .   In the first case, if then we have two positive, real critical points: The phase diagram for this situation is   Phase diagram for      So we see that is unstable while is stable. In particular, as long as , then the rate of harvesting is sustainable.    Now assume that . Then we have only one equilibrium solution: . We interpret the phase diagram in as follows: if is less than then the population will collapse to extinction. Otherwise, the population will stabilize at . This type of critical point is often called semi-stable.    Phase diagram for        Finally, consider the case . Then we have no (real) critical points. Since imaginary populations don't make sense in this model, there is no sustainable population. No matter how large the initial population, it will eventually go extinct if harvested at a rate greater than .     By the above, the largest sustainable harvesting rate is as long as .      Linear stability analysis  Given the autonomous ODE , we saw above that we can qualify the behavior of equilibrium solutions by setting up a phase diagram. We can go a step further and actually qualify the growth of solutions that are \"near\" equilibrium solutions. In particular, we have the following theorem.   Linear stability analysis   Suppose where is continuously differentiable, and let denote a critical point\/equilibrium solution of the ODE. If , then is stable and solutions near will move exponentially towards . If , then is unstable and solutions near will move exponentially away from . If , then more advanced methods are required.     Classifying the critical points of the logistic equation   Classify the critical points of the logistic equation as stable or unstable.    Recall that the logistic equation is given by for (we'll assume) positive constants . From here, we clearly see that the critical points are and (which makes sense from a population standpoint!). We could set up a phase diagram to determine stability, but we'll use instead.  Since , we see that Hence is unstable, while is stable.     "
},
{
  "id": "subsection-population-models-3",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#subsection-population-models-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural growth equation "
},
{
  "id": "subsection-population-models-4",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#subsection-population-models-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general population equation "
},
{
  "id": "definition-general-population-equation",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#definition-general-population-equation",
  "type": "Definition",
  "number": "1.6.1",
  "title": "General population equation.",
  "body": " General population equation   The general population equation for a population is given by    "
},
{
  "id": "example-population-explosion",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-population-explosion",
  "type": "Example",
  "number": "1.6.2",
  "title": "Population explosion.",
  "body": " Population explosion   A population has members at time years with a death rate of and a birth rate of , where denotes the population after years. Find and determine if this is a reasonable population model.    If we assume that the population obeys the general growth equation, then we get This ODE is separable, and we can therefore solve it to get   So we have a solution, and furthermore guarantees that the solution is unique. But if you stare at this for a bit, you might see that it has a divide-by-zero problem. In particular, In other words, the population becomes infinite in about two weeks!   "
},
{
  "id": "subsection-the-logistic-equation-3",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#subsection-the-logistic-equation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logistic equation "
},
{
  "id": "example-long-term-behavior-of-logistic-growth",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-long-term-behavior-of-logistic-growth",
  "type": "Example",
  "number": "1.6.3",
  "title": "Long-term behavior of logistic growth.",
  "body": " Long-term behavior of logistic growth   What is the long-term population of a species that grows according to the logistic equation ?    Using the fact that we have So the population should eventually level out at .   "
},
{
  "id": "subsection-the-logistic-equation-5",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#subsection-the-logistic-equation-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "carrying capacity "
},
{
  "id": "example-population-growth-in-the-usa",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-population-growth-in-the-usa",
  "type": "Example",
  "number": "1.6.4",
  "title": "Population growth in the USA.",
  "body": " Population growth in the USA   In millions, the population of the USA in 1990 was and was growing at a rate of per year. In 2012, the population was and was growing at a rate of per year. Assuming that the population of the USA grows logistically, estimate the population of the USA in 2017 and compare it to the current estimate of .    Let denote the population of the USA (in millions), where is the number of years after 1990. Then and So we need to find and .  When , we have and . Similarly, when we have and . Therefore Solving this system gives us and . Hence   This model estimates the population in 2017 to be which is about a error. Note also that this model predicts the carrying capacity of the USA to be .   "
},
{
  "id": "section-stability-of-solutions-2",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#section-stability-of-solutions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "autonomous ODEs "
},
{
  "id": "section-stability-of-solutions-3",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#section-stability-of-solutions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "critical points equilibrium solutions "
},
{
  "id": "example-finding-equilibrium-solutions",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-finding-equilibrium-solutions",
  "type": "Example",
  "number": "1.6.5",
  "title": "Finding equilibrium solutions.",
  "body": " Finding equilibrium solutions   Find the equilibrium solutions of .    We need to solve the equation . Thankfully, we can factor this to get , and so the equilibrium solutions are .   "
},
{
  "id": "definition-stability-critial-points",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#definition-stability-critial-points",
  "type": "Definition",
  "number": "1.6.6",
  "title": "Stability of solutions.",
  "body": " Stability of solutions   A critical point is stable if solutions that start \"near\" the point stay near it. A critical point is unstable if solutions that start \"near\" the point can diverge away from it.   "
},
{
  "id": "example-determining-the-stability-of-solutions",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-determining-the-stability-of-solutions",
  "type": "Example",
  "number": "1.6.7",
  "title": "Determining the stability of solutions.",
  "body": " Determining the stability of solutions   What are the stable critical points of ?    We already know that the critical points are . We can determine their stability by making use of a phase diagram , which is essentially a sign chart for :   The phase diagram for      This shows us that solutions that begin near tend to move away from , which solutions near tend to move towards . So is unstable and is stable.   "
},
{
  "id": "example-determining-a-sustainable-population",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-determining-a-sustainable-population",
  "type": "Example",
  "number": "1.6.9",
  "title": "Determining a sustainable population.",
  "body": " Determining a sustainable population   Consider a population of fish that obeys the logistic equation where is the population of fish (in thousands) after years. Suppose that the population is also harvested at some rate (in thousands per year). What is the maximum sustainable rate of harvesting?    To account for the harvesting, we need to modify the ODE: The harvesting will be sustainable as long as the population does not become extinct. To determine this long term behavior, we'll find the critical points and set up a phase diagram.  The critical points are given by by the quadratic formula. We now have three cases to consider: In terms of , these reduce to .   In the first case, if then we have two positive, real critical points: The phase diagram for this situation is   Phase diagram for      So we see that is unstable while is stable. In particular, as long as , then the rate of harvesting is sustainable.    Now assume that . Then we have only one equilibrium solution: . We interpret the phase diagram in as follows: if is less than then the population will collapse to extinction. Otherwise, the population will stabilize at . This type of critical point is often called semi-stable.    Phase diagram for        Finally, consider the case . Then we have no (real) critical points. Since imaginary populations don't make sense in this model, there is no sustainable population. No matter how large the initial population, it will eventually go extinct if harvested at a rate greater than .     By the above, the largest sustainable harvesting rate is as long as .   "
},
{
  "id": "theorem-linear-stability-analysis",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#theorem-linear-stability-analysis",
  "type": "Theorem",
  "number": "1.6.12",
  "title": "Linear stability analysis.",
  "body": " Linear stability analysis   Suppose where is continuously differentiable, and let denote a critical point\/equilibrium solution of the ODE. If , then is stable and solutions near will move exponentially towards . If , then is unstable and solutions near will move exponentially away from . If , then more advanced methods are required.   "
},
{
  "id": "example-classifying-the-critical-points-of-the-logistic-equation",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-classifying-the-critical-points-of-the-logistic-equation",
  "type": "Example",
  "number": "1.6.13",
  "title": "Classifying the critical points of the logistic equation.",
  "body": " Classifying the critical points of the logistic equation   Classify the critical points of the logistic equation as stable or unstable.    Recall that the logistic equation is given by for (we'll assume) positive constants . From here, we clearly see that the critical points are and (which makes sense from a population standpoint!). We could set up a phase diagram to determine stability, but we'll use instead.  Since , we see that Hence is unstable, while is stable.   "
},
{
  "id": "section-second-order-linear-odes",
  "level": "1",
  "url": "section-second-order-linear-odes.html",
  "type": "Section",
  "number": "2.1",
  "title": "Second-order linear ODEs",
  "body": " Second-order linear ODEs   Recall that a second-order ODE is an ODE whose highest derivative is the second derivative. In this section, we'll look at how to solve second-order ODEs of a special type. Our method of solution here will be generalized to many, many other ODEs.    Types of linear ODEs  A first-order ODE is linear if it can be written in the form (see ). We have a similar definition for second-order ODEs.   Second-order linear ODEs  second-order ODEs second-order linear ODEs homogeneous and nonhomogeneous   A second-order ODE is linear if it can be written in the form A second-order linear ODE is homogeneous if and nonhomogeneous if .     Types of second-order ODEs  Consider the following ODEs:   is linear but nonhomogeneous.   is nonlinear.   is linear and homogeneous.     Newton's Second Law is a great source of linear second-order ODEs, as shows. However, we will first need to state Hooke's law .   Hooke's law  Hooke's law   Consider an object attached to a spring. The force exerted by the spring on the object is directly proportional to the displacement of the object from the spring's equilibrium, or at rest, position.     A second-order model   An object of mass 4 is attached to a horizontal, frictionless spring. Let denote the equilibrium position of the spring and let denote the displacement of the mass from the spring's equilibrium position. The only force acting on the mass is the force of the spring itself. Find a mathematical model for .    Let denote the force of the spring on the mass. Then by we must have for some . Now, by Newton's Second Law we must also have . Hence So the motion of the mass is modeled by a linear, second-order homogeneous ODE.     The reason we take in Hooke's law is because we want to emphasize that the spring force is a restoring force , since it acts against the displacement of the mass.   The general trend that we will see for mathematical models using linear ODEs is that they will be homogeneous if we assume that there is no external force, and nonhomogeneous if we assume there is an external force.    Solutions of second-order linear ODEs  The reason we restrict ourselves to linear ODEs is because their solutions behave very nicely. In particular, we have the , which is an important principle for homogeneous ODEs. First, some terminology.   Linear combinations  linear combination two functions   Let and denote functions of . A linear combination of and is a function of the form where are constants.     The superposition principle  second-order ODEs second-order linear ODEs superposition principle   Let and denote two (possibly different) solutions of the ODE . Then any linear combination of these solutions is itself another solution of the same ODE.    We need to show that is another solution of the same ODE, where are arbitrary constants. To do this, we'll just plug the linear combination into the ODE and simplify:      is important because it tells us how to construct new solutions of homogeneous ODEs out of known solutions. The next example demonstrates this.   Solving a second-order IVP   Using the fact that and are both solutions of , solve the IVP given by     Note that we have two initial conditions. In general, we'll need as many initial conditions as the order of the ODE.  To solve the IVP, we'll use the superposition principle to give us as much leeway as possible in constructing a solution of out and . So we'll guess the solution takes the form . By the superposition principle we're guaranteed that this is a solution of the ODE , so we just need to pick the constants in order to satisfy the initial conditions. Let's start with the first initial condition, . This gives us the equation So . Similarly, gives us Hence , and the solution of the IVP is     The reason we were able to solve the IVP in was because the individual solutions and gave us enough to build the particular solution of the IVP. It turns out that every solution of can be written as a linear combination of these two functions, so knowing these two functions is enough to solve every IVP involving this ODE.  In general, our goal will be to describe a \"basis\" of solutions for a given homogeneous ODE, a finite set of solutions that can be used to describe all possible solutions. This can be done if the functions in the basis aren't too \"similar\", in the following sense.   Linear independence of functions  linear independence two functions   Two functions and are said to be linearly independent on an interval if the linear combination is equal to if and only if . Otherwise, we say that they are linearly dependent .    The main idea behind is that and are linearly independent if they are not like terms (i.e. they don't cancel each other out). Note that are linearly dependent if and only if for some . Equivalently, they are linearly dependent if and only if for some .   Linear independence of sine and cosine   Show that and are linearly independent.    Since is not constant, this means that and must be linearly independent.    Although it wasn't too hard to see that the functions in were linearly independent, in other cases it can be much trickier (especially when we move to higher order ODEs). For example, suppose we set and . Then it's not obvious at all that these two functions are linearly dependent! In fact, So generally when we try to determine if two functions are linearly independent, we'll make use of the Wronskian .   Wronskian of two functions  Wronskian two functions   Let and denote two differentiable functions. The Wronskian of and , denoted , is given by      Linear independence and the Wronskian   Let and be two functions that are differentiable on some interval . Then and are linearly independent on if  somewhere  . Conversely, if  and  and can both be represented by power series on , then and are linearly dependent.     Using the Wronskian  If we let and and compute their Wronskian, we obtain (after a fair bit of algebra) . Since and can clearly be represented by power series on any interval (since, being polynomials, they already are power series), this means that the two functions are linearly independent.   We mentioned earlier that we'll try to find a basis of solutions for linear ODEs. Now that we have the concept of linear independence and the Wronskian for checking if two functions are linearly independent, we can make the following definition.   Basis of solutions  second-order ODEs second-order linear ODEs basis   Let and denote solutions of some second-order linear homogeneous ODE. We call a basis if and are also linearly independent.    Once we have a basis for a second-order linear homogeneous ODE, we can solve any IVP that we wish involving that ODE. In particular, if is a basis for such an ODE, then every solution of the ODE can be written as a linear combination of and .   Linear independence using the Wronskian   Let Given that these functions are both solutions of solve the corresponding IVP with initial conditions .    We need to start by showing that is a basis for the ODE. First, we compute : So , which is clearly nonzero on the interval . Hence and are linearly independent, and therefore is a basis for the ODE.  To actually find the solution (call it ), we'll set and use the initial conditions to find and . Doing so gives and , and so the solution of the IVP is      "
},
{
  "id": "definition-second-order-linear-odes",
  "level": "2",
  "url": "section-second-order-linear-odes.html#definition-second-order-linear-odes",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Second-order linear ODEs.",
  "body": " Second-order linear ODEs  second-order ODEs second-order linear ODEs homogeneous and nonhomogeneous   A second-order ODE is linear if it can be written in the form A second-order linear ODE is homogeneous if and nonhomogeneous if .   "
},
{
  "id": "example-types-of-second-order-odes",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-types-of-second-order-odes",
  "type": "Example",
  "number": "2.1.2",
  "title": "Types of second-order ODEs.",
  "body": " Types of second-order ODEs  Consider the following ODEs:   is linear but nonhomogeneous.   is nonlinear.   is linear and homogeneous.    "
},
{
  "id": "subsection-types-of-linear-odes-5",
  "level": "2",
  "url": "section-second-order-linear-odes.html#subsection-types-of-linear-odes-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hooke's law "
},
{
  "id": "theorem-hooke-s-law",
  "level": "2",
  "url": "section-second-order-linear-odes.html#theorem-hooke-s-law",
  "type": "Theorem",
  "number": "2.1.3",
  "title": "Hooke’s law.",
  "body": " Hooke's law  Hooke's law   Consider an object attached to a spring. The force exerted by the spring on the object is directly proportional to the displacement of the object from the spring's equilibrium, or at rest, position.   "
},
{
  "id": "example-a-second-order-model",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-a-second-order-model",
  "type": "Example",
  "number": "2.1.4",
  "title": "A second-order model.",
  "body": " A second-order model   An object of mass 4 is attached to a horizontal, frictionless spring. Let denote the equilibrium position of the spring and let denote the displacement of the mass from the spring's equilibrium position. The only force acting on the mass is the force of the spring itself. Find a mathematical model for .    Let denote the force of the spring on the mass. Then by we must have for some . Now, by Newton's Second Law we must also have . Hence So the motion of the mass is modeled by a linear, second-order homogeneous ODE.   "
},
{
  "id": "definition-linear-combinations",
  "level": "2",
  "url": "section-second-order-linear-odes.html#definition-linear-combinations",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Linear combinations.",
  "body": " Linear combinations  linear combination two functions   Let and denote functions of . A linear combination of and is a function of the form where are constants.   "
},
{
  "id": "theorem-the-superposition-principle",
  "level": "2",
  "url": "section-second-order-linear-odes.html#theorem-the-superposition-principle",
  "type": "Theorem",
  "number": "2.1.6",
  "title": "The superposition principle.",
  "body": " The superposition principle  second-order ODEs second-order linear ODEs superposition principle   Let and denote two (possibly different) solutions of the ODE . Then any linear combination of these solutions is itself another solution of the same ODE.    We need to show that is another solution of the same ODE, where are arbitrary constants. To do this, we'll just plug the linear combination into the ODE and simplify:    "
},
{
  "id": "example-solving-a-second-order-ivp",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-solving-a-second-order-ivp",
  "type": "Example",
  "number": "2.1.7",
  "title": "Solving a second-order IVP.",
  "body": " Solving a second-order IVP   Using the fact that and are both solutions of , solve the IVP given by     Note that we have two initial conditions. In general, we'll need as many initial conditions as the order of the ODE.  To solve the IVP, we'll use the superposition principle to give us as much leeway as possible in constructing a solution of out and . So we'll guess the solution takes the form . By the superposition principle we're guaranteed that this is a solution of the ODE , so we just need to pick the constants in order to satisfy the initial conditions. Let's start with the first initial condition, . This gives us the equation So . Similarly, gives us Hence , and the solution of the IVP is    "
},
{
  "id": "definition-linear-independence-of-functions",
  "level": "2",
  "url": "section-second-order-linear-odes.html#definition-linear-independence-of-functions",
  "type": "Definition",
  "number": "2.1.8",
  "title": "Linear independence of functions.",
  "body": " Linear independence of functions  linear independence two functions   Two functions and are said to be linearly independent on an interval if the linear combination is equal to if and only if . Otherwise, we say that they are linearly dependent .   "
},
{
  "id": "example-linear-independence-of-sine-and-cosine",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-linear-independence-of-sine-and-cosine",
  "type": "Example",
  "number": "2.1.9",
  "title": "Linear independence of sine and cosine.",
  "body": " Linear independence of sine and cosine   Show that and are linearly independent.    Since is not constant, this means that and must be linearly independent.   "
},
{
  "id": "subsection-solutions-of-second-order-linear-ODEs-12",
  "level": "2",
  "url": "section-second-order-linear-odes.html#subsection-solutions-of-second-order-linear-ODEs-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Wronskian "
},
{
  "id": "definition-wronskian-of-two-functions",
  "level": "2",
  "url": "section-second-order-linear-odes.html#definition-wronskian-of-two-functions",
  "type": "Definition",
  "number": "2.1.10",
  "title": "Wronskian of two functions.",
  "body": " Wronskian of two functions  Wronskian two functions   Let and denote two differentiable functions. The Wronskian of and , denoted , is given by    "
},
{
  "id": "theorem-linear-independence-and-the-wronskian",
  "level": "2",
  "url": "section-second-order-linear-odes.html#theorem-linear-independence-and-the-wronskian",
  "type": "Theorem",
  "number": "2.1.11",
  "title": "Linear independence and the Wronskian.",
  "body": " Linear independence and the Wronskian   Let and be two functions that are differentiable on some interval . Then and are linearly independent on if  somewhere  . Conversely, if  and  and can both be represented by power series on , then and are linearly dependent.   "
},
{
  "id": "example-using-the-wronskian",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-using-the-wronskian",
  "type": "Example",
  "number": "2.1.12",
  "title": "Using the Wronskian.",
  "body": " Using the Wronskian  If we let and and compute their Wronskian, we obtain (after a fair bit of algebra) . Since and can clearly be represented by power series on any interval (since, being polynomials, they already are power series), this means that the two functions are linearly independent.  "
},
{
  "id": "definition-basis-of-solutions",
  "level": "2",
  "url": "section-second-order-linear-odes.html#definition-basis-of-solutions",
  "type": "Definition",
  "number": "2.1.13",
  "title": "Basis of solutions.",
  "body": " Basis of solutions  second-order ODEs second-order linear ODEs basis   Let and denote solutions of some second-order linear homogeneous ODE. We call a basis if and are also linearly independent.   "
},
{
  "id": "example-linear-independence-using-the-wronskian",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-linear-independence-using-the-wronskian",
  "type": "Example",
  "number": "2.1.14",
  "title": "Linear independence using the Wronskian.",
  "body": " Linear independence using the Wronskian   Let Given that these functions are both solutions of solve the corresponding IVP with initial conditions .    We need to start by showing that is a basis for the ODE. First, we compute : So , which is clearly nonzero on the interval . Hence and are linearly independent, and therefore is a basis for the ODE.  To actually find the solution (call it ), we'll set and use the initial conditions to find and . Doing so gives and , and so the solution of the IVP is    "
},
{
  "id": "section-homogeneous-odes-with-constant-coefficients",
  "level": "1",
  "url": "section-homogeneous-odes-with-constant-coefficients.html",
  "type": "Section",
  "number": "2.2",
  "title": "Homogeneous ODEs with constant coefficients",
  "body": " Homogeneous ODEs with constant coefficients  Homogeneous ODEs  Now we'll move on to solving homogeneous ODEs, at least with constant coefficients.   Solving a homogeneous ODE  Suppose we wanted to solve , where . If we stare at this for a bit, we may realize the following: the only way for a function to be a solution of this ODE is for and its derivatives to cancel each other out. In other words, and its derivatives should be like terms . This is a huge hint that should look like an exponential function. So we'll guess that for some real number , and see if we can't pick in just the right way to get a solution to the ODE. If we plug into the ODE, we get .  So we need to set equal to and solve for , which gives Therefore two solutions of are given by and . Since , this means that is actually the general solution of the ODE.   The process in will work for every second-order homogeneous ODE with constant coefficients. So solving such an ODE is even easier than integrating: all we need to do is to find the roots of a particular polynomial.   The characteristic polynomial  second-order ODEs characteristic equation   Let and be constants. Given the ODE , the characteristic equation of this ODE is the polynomial     We can now state the following result for finding solutions of homogeneous ODEs with constant coefficients.   Characteristic equations with distinct roots   Let and be constants. Suppose that the characteristic equation of has distinct roots and . Then the general solution of the ODE is given by      Spring-mass system revisited   An object of mass 4 is attached to a horizontal, frictionless spring. Suppose the spring constant is given by . The mass is held 3 to the right of the spring's equilibrium position, and is then released at time where is in seconds. Find the displacement of the mass.    We know from that the second-order ODE given by provides a model for , but now we are in a position to solve it. The characteristic equation of this ODE is , which has roots . The imaginary roots are not a problem , and in fact provide significant information about the motion of the mass, as we'll soon see. The general solution of the ODE is .  The initial conditions are and , which give the equations . The second equation implies that , and applying this to the first equation now gives . Hence the displacement of the mass is given by .    The appearance of the \"imaginary\" solution in may seem strange, but they're actually quite natural. In fact, we can use Euler's formula to write the solution in terms of a more familiar function.   Euler's formula  Euler's formula   For all , the following equations hold: .    So using Euler's formula on the solution from gives . So the imaginary roots from actually relate to the frequency of the spring-mass system in that problem. This is a trend we will see often in this course: imaginary numbers corresponding to oscillating quantities.  Now we'll take a look at how to solve second-order homogeneous ODEs whose characteristic equations have repeated roots. This can only happen if the characteristic equation takes the form , which means that the original ODE still has as one solution. To get the general solution we need a second, linearly independent, solution. We can guess that this second solution must also involve the exponential , but it can't be a scalar multiple since we need a linearly independent solution. Therefore, we will try as our second solution.   Repeated roots in the characteristic equation   Find the general solution of where .    We begin by solving the characteristic equation, which for this ODE is The only solution of this equation is , which is a repeated root. We can still get one solution of the ODE using this root, namely , but we need two linearly independent solutions in order to find the general solution. We'll guess (and check!) that is another solution of . If we plug into the ODE, we get which shows that is indeed a solution of the ODE. Since is a linearly independent set of solutions (which we can check via the Wronskian), this means that the general solution of is .    The method used in also works for other homogeneous ODEs with constant coefficients whose characteristic equations have repeated roots. Hence the roots of the characteristic equation completely determine the general solutions of such ODEs. We summarize this in the following table.   Types of solutions from roots    Roots  General solution             Remember that it's not a problem if the characteristic equation has imaginary roots, and in fact we must account for these in order to completely describe the corresponding physical system. If we have imaginary roots, then we can simply use Euler's formula to rewrite the solutions in terms of sine and cosine.  "
},
{
  "id": "example-solving-a-homogeneous-ode",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#example-solving-a-homogeneous-ode",
  "type": "Example",
  "number": "2.2.1",
  "title": "Solving a homogeneous ODE.",
  "body": " Solving a homogeneous ODE  Suppose we wanted to solve , where . If we stare at this for a bit, we may realize the following: the only way for a function to be a solution of this ODE is for and its derivatives to cancel each other out. In other words, and its derivatives should be like terms . This is a huge hint that should look like an exponential function. So we'll guess that for some real number , and see if we can't pick in just the right way to get a solution to the ODE. If we plug into the ODE, we get .  So we need to set equal to and solve for , which gives Therefore two solutions of are given by and . Since , this means that is actually the general solution of the ODE.  "
},
{
  "id": "definition-the-characteristic-polynomial",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#definition-the-characteristic-polynomial",
  "type": "Definition",
  "number": "2.2.2",
  "title": "The characteristic polynomial.",
  "body": " The characteristic polynomial  second-order ODEs characteristic equation   Let and be constants. Given the ODE , the characteristic equation of this ODE is the polynomial    "
},
{
  "id": "theorem-characteristic-equations-with-distinct-roots",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#theorem-characteristic-equations-with-distinct-roots",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "Characteristic equations with distinct roots.",
  "body": " Characteristic equations with distinct roots   Let and be constants. Suppose that the characteristic equation of has distinct roots and . Then the general solution of the ODE is given by    "
},
{
  "id": "example-spring-mass-system-revisited",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#example-spring-mass-system-revisited",
  "type": "Example",
  "number": "2.2.4",
  "title": "Spring-mass system revisited.",
  "body": " Spring-mass system revisited   An object of mass 4 is attached to a horizontal, frictionless spring. Suppose the spring constant is given by . The mass is held 3 to the right of the spring's equilibrium position, and is then released at time where is in seconds. Find the displacement of the mass.    We know from that the second-order ODE given by provides a model for , but now we are in a position to solve it. The characteristic equation of this ODE is , which has roots . The imaginary roots are not a problem , and in fact provide significant information about the motion of the mass, as we'll soon see. The general solution of the ODE is .  The initial conditions are and , which give the equations . The second equation implies that , and applying this to the first equation now gives . Hence the displacement of the mass is given by .   "
},
{
  "id": "section-homogeneous-odes-with-constant-coefficients-10",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#section-homogeneous-odes-with-constant-coefficients-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler's formula "
},
{
  "id": "theorem-euler-s-formula",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#theorem-euler-s-formula",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "Euler’s formula.",
  "body": " Euler's formula  Euler's formula   For all , the following equations hold: .   "
},
{
  "id": "example-repeated-roots-in-the-characteristic-equation",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#example-repeated-roots-in-the-characteristic-equation",
  "type": "Example",
  "number": "2.2.6",
  "title": "Repeated roots in the characteristic equation.",
  "body": " Repeated roots in the characteristic equation   Find the general solution of where .    We begin by solving the characteristic equation, which for this ODE is The only solution of this equation is , which is a repeated root. We can still get one solution of the ODE using this root, namely , but we need two linearly independent solutions in order to find the general solution. We'll guess (and check!) that is another solution of . If we plug into the ODE, we get which shows that is indeed a solution of the ODE. Since is a linearly independent set of solutions (which we can check via the Wronskian), this means that the general solution of is .   "
},
{
  "id": "section-homogeneous-odes-with-constant-coefficients-16",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#section-homogeneous-odes-with-constant-coefficients-16",
  "type": "Table",
  "number": "2.2.7",
  "title": "Types of solutions from roots",
  "body": " Types of solutions from roots    Roots  General solution            "
},
{
  "id": "section-spring-mass-models",
  "level": "1",
  "url": "section-spring-mass-models.html",
  "type": "Section",
  "number": "2.3",
  "title": "Spring-mass models",
  "body": " Spring-mass models   In this section we examine a common application of second-order ODEs: modeling movement in a spring-mass system. We will look at two different types of motion: undamped and damped. Damped motion will result from forces internal to the system and lead to homogeneous ODEs. External forces lead to non-homogeneous models, which we will consider in .    Free undamped motion  Suppose we have a mass attached to a spring as in the following diagram:   A spring-mass system      If we let denote the displacement of the mass from the spring's equilibrium position and let denote the force of the spring on the mass (see Hooke's law ), and assume that no other force is acting on the mass, then we know from that satisfies the second-order ODE given by . Now set so that we can rewrite this to get .  One thing we can notice right away about solutions of is that they should all be periodic (see ), which, of course, makes sense! To see why, note that the roots of the characteristic equation are , which means that the solutions may be written in the form which we can rewrite as using . Hence every solution of is a sinusoidal wave.  We can go even further by making use of some clever algebra and the appropriate trigonometric formulas if we assume that (i.e. and are not both  ). In this case, we may write . Now set and define implicitly by and . Then we get  is the amplitude of the wave , is the circular frequency , is the period of motion and is the phase .   There are infinitely many choices for here, but we can select a unique one if we make the extra restriction that . Computer systems often include a function named atan2 to handle the computation of , although this usually returns an angle in .    Another spring-mass system   An object with a mass of 5 is fixed to a spring and a force of 10 holds the mass 5 to the left of the spring's equilibrium position. If the object is released, how long will it take for the mass to return to its original position? And what is the position of the mass?    Let denote the position of the mass seconds after being released, so that and . We could find the time it takes for the mass to return to its starting position by first finding , but a quicker way is to just find the period of . To do this, we must find the circular frequency . Thankfully, half of the work is done for us (we know ), so we only need the value of which itself comes from Hooke's law.  Call the spring force and recall that . We know that it takes a force of 10 to hold the mass still at . The spring force must precisely counterbalance this force in order for the mass to remain still as it's held, which means that since pulls the mass to the right. Therefore and so , which gives . This means that the period of motion is   To find , we'll use the fact that it can be written as . Since (because the mass can never go more than five meters from the equilibrium position) and we already know that , we just need to find . We can just make use of the initial condition to get this: and so we can choose . Hence      You may be troubled by the fact that we only explicitly used the first initial condition in this example. However, the second condition was actually used implicitly: it allowed us to assume that the amplitude was as opposed to another number. If , finding would have been a little trickier.     Free damped motion  Now we look at how the motion of a mass attached to a spring is altered if the motion is damped , say, by a dashpot. See .   A damped spring-mass system      Now in addition to the spring force , we must also worry about the force of the dashpot on the mass. is always going to act against the velocity of the mass, so for simplicity we assume that for some . Using as usual in conjunction with Newton's Second Law gives us the second-order ODE   This ODE is homogeneous and has constant coefficients so we may solve it using the method of characteristic equations. The characteristic equation of this ODE is The roots of this equation are The behavior of this system therefore depends on the quantity , and so we have three cases to consider:    .  In this case, the characteristic equation has two real roots, and so the solution has the form Now, and are both negative since (remember that we're assuming that and are positive!). This means that as . There is no oscillation present in the motion of the mass in this case since the mass never passes through , so we call this overdamped motion .     .  In this case, the characteristic equation has a repeated (real) root, and so the solution takes the form This mass can pass through only once, at . Once it does, the mass will \"turn around\" soon afterwards and beginning moving back to , as in the first case. We call this type of motion critically damped , since it's right on the border between overdamped motion and oscillating motion.     .  In this case the characteristic equation has two distinct complex roots of the form , where In particular, the real part of these roots is always negative. The solution in this case takes the form after applying Euler's formula. As in the previous two cases, as . However, oscillation is now present in the system for all time! We call this motion underdamped , since the damping term is not strong enough to cancel out the oscillation present in the system. Note that the real part contributes to the \"amplitude\" of the motion, while the imaginary part represents the angular frequency of the motion. The ordinary frequency of the motion is given by .      A spring-dashpot system   Suppose that an object of mass is attached to both a spring and a dashpot. The mass is held meter to the left of the spring's equilibrium position . The force of the spring on the mass is and the force of the dashpot on the mass is , where is the displacement of the mass. At time , the mass is released. Find .    The ODE that models the motion of this mass is and the roots of the corresponding characteristic equation are We can already see that the motion must be underdamped since we have complex roots, and the position itself is given by   Now we can use the initial conditions and to find and . Doing so, we quickly get and . Hence     As mentioned previously, the exponential term in from serves to dampen the motion of the spring. This is illustrated in .   An exponential term damping motion       "
},
{
  "id": "figure-spring-mass-system",
  "level": "2",
  "url": "section-spring-mass-models.html#figure-spring-mass-system",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " A spring-mass system     "
},
{
  "id": "subsection-free-undamped-motion-6",
  "level": "2",
  "url": "section-spring-mass-models.html#subsection-free-undamped-motion-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "amplitude circular frequency period phase "
},
{
  "id": "example-another-spring-mass-system",
  "level": "2",
  "url": "section-spring-mass-models.html#example-another-spring-mass-system",
  "type": "Example",
  "number": "2.3.2",
  "title": "Another spring-mass system.",
  "body": " Another spring-mass system   An object with a mass of 5 is fixed to a spring and a force of 10 holds the mass 5 to the left of the spring's equilibrium position. If the object is released, how long will it take for the mass to return to its original position? And what is the position of the mass?    Let denote the position of the mass seconds after being released, so that and . We could find the time it takes for the mass to return to its starting position by first finding , but a quicker way is to just find the period of . To do this, we must find the circular frequency . Thankfully, half of the work is done for us (we know ), so we only need the value of which itself comes from Hooke's law.  Call the spring force and recall that . We know that it takes a force of 10 to hold the mass still at . The spring force must precisely counterbalance this force in order for the mass to remain still as it's held, which means that since pulls the mass to the right. Therefore and so , which gives . This means that the period of motion is   To find , we'll use the fact that it can be written as . Since (because the mass can never go more than five meters from the equilibrium position) and we already know that , we just need to find . We can just make use of the initial condition to get this: and so we can choose . Hence    "
},
{
  "id": "figure-damped-spring",
  "level": "2",
  "url": "section-spring-mass-models.html#figure-damped-spring",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": " A damped spring-mass system     "
},
{
  "id": "subsection-free-damped-motion-5",
  "level": "2",
  "url": "section-spring-mass-models.html#subsection-free-damped-motion-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "overdamped motion critically damped underdamped "
},
{
  "id": "example-a-spring-dashpot-system",
  "level": "2",
  "url": "section-spring-mass-models.html#example-a-spring-dashpot-system",
  "type": "Example",
  "number": "2.3.4",
  "title": "A spring-dashpot system.",
  "body": " A spring-dashpot system   Suppose that an object of mass is attached to both a spring and a dashpot. The mass is held meter to the left of the spring's equilibrium position . The force of the spring on the mass is and the force of the dashpot on the mass is , where is the displacement of the mass. At time , the mass is released. Find .    The ODE that models the motion of this mass is and the roots of the corresponding characteristic equation are We can already see that the motion must be underdamped since we have complex roots, and the position itself is given by   Now we can use the initial conditions and to find and . Doing so, we quickly get and . Hence    "
},
{
  "id": "figure-damped-motion",
  "level": "2",
  "url": "section-spring-mass-models.html#figure-damped-motion",
  "type": "Figure",
  "number": "2.3.5",
  "title": "",
  "body": " An exponential term damping motion     "
},
{
  "id": "section-solutions-of-nonhomogeneous-equations",
  "level": "1",
  "url": "section-solutions-of-nonhomogeneous-equations.html",
  "type": "Section",
  "number": "2.4",
  "title": "Solutions of non-homogeneous equations",
  "body": " Solutions of non-homogeneous equations  Non-homogeneous equations   In this section we'll deal with non-homogeneous equations and finding their solutions. This will help us to model systems involving an external force.    The method of undetermined coefficients  Consider the non-homogeneous linear ODE with constant coefficients given by . If were zero then we could solve this by finding the roots of the characteristic equations and using them to determine the appropriate form of the solution. Although that's no longer enough if , our method for solving homogeneous equations still plays an important role.   Solution of non-homogeneous equations   Consider the ODE given in . Let (the complementary solution ) denote the solution of the associated homogeneous equation  and let (the particular solution ) denote a single solution of . Then the general solution of is given by .     shows that to solve , we only need to solve the associated homogeneous equation (which we're quite used to by now!) and find a single solution of . The method we will use is the method of undetermined coefficients , which we'll demonstrate by example.   Using the method of undetermined coefficients   Find the general solution of the ODE given by     To find the general solution we need to do two things: find the complementary solution of the associated homogeneous equation and find a single particular solution of the given ODE. We already know how to find which is just Once we can find a single particular solution we'll be finished.   The characteristic equation of the ODE is .   If we stare that the ODE, then we see that and its derivatives must cancel each other and leave a polynomial. So it's reasonable to guess that a polynomial might be a solution of the ODE, or equivalently,  should be a polynomial . Since the degree of the right hand side is , then should probably be degree as well. This means that for some constants .   Recall that the degree of a polynomial is just the highest power of the variable in the polynomial.   To find these constants ( undetermined coefficients ), we plug our guess into the ODE to get The only way for this equation to be true is for . So and . Hence the general solution of the ODE is     Note that in , we didn't need any initial conditions to find . This means that if a non-homogeneous ODE like the one in represents some physical system, then the initial configuration of that system has no effect on . We will see soon that particular solutions correspond to external forces on a system, like gravity, whereas complementary solutions correspond to internal forces in a system, such as the spring force.    Find the general solution of     The general solution will take the form . Once again, we find by solving the characteristic equation to get   Now we can make a guess as to what should be, once again based on the right hand side of the ODE. If we want to differentiate and obtain , then should include both an term and a term. If we make the guess that , then we get This forces  and  , as well as  and  . Obviously, this is a problem!  What happened here is we didn't give our guess for enough flexibility. We know we want to involve and , but as soon as we plug this into the ODE and start differentiating constant terms and cosine terms will begin to appear, and we need to account for these as well . So we'll update our guess for , and assume Plugging this into the ODE and collecting like terms gives Hence and the solution of our ODE is      Method of undetermined coefficients with overlap   Find the solution of the IVP     We can start this example the same way we've done the previous ones. First, we find by solving . So Now we find . Since the RHS of the ODE is , we'll guess that . However, this will cause us problems! Since are both solutions of the corresponding homogeneous ODE, then plugging into will just give again, instead of .  The problem here is that our guess for overlaps with . To fix this, we'll multiply our guess for by the smallest power of that removes the overlap. In this case, we'll just multiply by to get Now, we'll plug our modified guess into the ODE and set it equal to : So we need and , or just . Hence and the general solution is then   To find the solution of the IVP, we just plug in the initial conditions. Since , this gives And since  gives So     What we did in will work in general: if and the initial guess for overlap, i.e. contain linearly dependent terms, then we multiply by the smallest power of (or the appropriate independent variable) that removes the overlap.   Determining the appropriate form of the particular solution   Consider the ODE Find the correct guess for .    Before we can do anything with , we need to find the complementary solution . This is given by Now we can try to guess an appropriate form for using the right hand side of the ODE. Each \"component\" of the right hand side contributes to our guess for as shown in . But now we have a problem, since overlaps with . So we multiply by to remove the overlap, and hence    Determining the appropriate form of a particular solution    component  contribution to                            "
},
{
  "id": "theorem-solution-of-non-homogeneous-equations",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#theorem-solution-of-non-homogeneous-equations",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "Solution of non-homogeneous equations.",
  "body": " Solution of non-homogeneous equations   Consider the ODE given in . Let (the complementary solution ) denote the solution of the associated homogeneous equation  and let (the particular solution ) denote a single solution of . Then the general solution of is given by .   "
},
{
  "id": "subsection-the-method-of-undetermined-coefficients-4",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#subsection-the-method-of-undetermined-coefficients-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of undetermined coefficients "
},
{
  "id": "example-using-the-method-of-undetermined-coefficients",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#example-using-the-method-of-undetermined-coefficients",
  "type": "Example",
  "number": "2.4.2",
  "title": "Using the method of undetermined coefficients.",
  "body": " Using the method of undetermined coefficients   Find the general solution of the ODE given by     To find the general solution we need to do two things: find the complementary solution of the associated homogeneous equation and find a single particular solution of the given ODE. We already know how to find which is just Once we can find a single particular solution we'll be finished.   The characteristic equation of the ODE is .   If we stare that the ODE, then we see that and its derivatives must cancel each other and leave a polynomial. So it's reasonable to guess that a polynomial might be a solution of the ODE, or equivalently,  should be a polynomial . Since the degree of the right hand side is , then should probably be degree as well. This means that for some constants .   Recall that the degree of a polynomial is just the highest power of the variable in the polynomial.   To find these constants ( undetermined coefficients ), we plug our guess into the ODE to get The only way for this equation to be true is for . So and . Hence the general solution of the ODE is    "
},
{
  "id": "subsection-the-method-of-undetermined-coefficients-7",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#subsection-the-method-of-undetermined-coefficients-7",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": "  Find the general solution of     The general solution will take the form . Once again, we find by solving the characteristic equation to get   Now we can make a guess as to what should be, once again based on the right hand side of the ODE. If we want to differentiate and obtain , then should include both an term and a term. If we make the guess that , then we get This forces  and  , as well as  and  . Obviously, this is a problem!  What happened here is we didn't give our guess for enough flexibility. We know we want to involve and , but as soon as we plug this into the ODE and start differentiating constant terms and cosine terms will begin to appear, and we need to account for these as well . So we'll update our guess for , and assume Plugging this into the ODE and collecting like terms gives Hence and the solution of our ODE is    "
},
{
  "id": "example-method-of-undetermined-coefficients-with-overlap",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#example-method-of-undetermined-coefficients-with-overlap",
  "type": "Example",
  "number": "2.4.4",
  "title": "Method of undetermined coefficients with overlap.",
  "body": " Method of undetermined coefficients with overlap   Find the solution of the IVP     We can start this example the same way we've done the previous ones. First, we find by solving . So Now we find . Since the RHS of the ODE is , we'll guess that . However, this will cause us problems! Since are both solutions of the corresponding homogeneous ODE, then plugging into will just give again, instead of .  The problem here is that our guess for overlaps with . To fix this, we'll multiply our guess for by the smallest power of that removes the overlap. In this case, we'll just multiply by to get Now, we'll plug our modified guess into the ODE and set it equal to : So we need and , or just . Hence and the general solution is then   To find the solution of the IVP, we just plug in the initial conditions. Since , this gives And since  gives So    "
},
{
  "id": "example-determining-the-appropriate-form-of-the-particular-solution",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#example-determining-the-appropriate-form-of-the-particular-solution",
  "type": "Example",
  "number": "2.4.5",
  "title": "Determining the appropriate form of the particular solution.",
  "body": " Determining the appropriate form of the particular solution   Consider the ODE Find the correct guess for .    Before we can do anything with , we need to find the complementary solution . This is given by Now we can try to guess an appropriate form for using the right hand side of the ODE. Each \"component\" of the right hand side contributes to our guess for as shown in . But now we have a problem, since overlaps with . So we multiply by to remove the overlap, and hence    Determining the appropriate form of a particular solution    component  contribution to                          "
},
{
  "id": "section-forced-oscillations-and-resonance",
  "level": "1",
  "url": "section-forced-oscillations-and-resonance.html",
  "type": "Section",
  "number": "2.5",
  "title": "Forced oscillations and resonance",
  "body": " Forced oscillations and resonance   In this section we will develop models for certain systems under the influence of a periodic, external force. The presence of an external force leads to non-homogeneous models, and we will use the techniques we developed in to deal with these systems.    Undamped systems  Consider the spring-mass system set up as in . Then we know that the displacement satisfies , where .  Now suppose that an external force also acts on the mass. Then the ODE that models the displacement is The solution of this ODE is then , where Systems where the external frequency  is equal to the internal frequency  are said to be in resonance . Without a damping force, the mass in such systems will move wildly out of control gets arbitrarily large as .   Determining resonance   An object with mass  2   is attached to a spring and is held  1   to the right of the spring's equilibrium position by a force of  8   At time seconds the mass is set in motion with an initial velocity of  2    to the left. Suppose an external force acts on the mass as well. Will the spring eventually break?    We can answer this question by determining if resonance is present in this system. The external frequency is , and the internal frequency is . Since and , we have , and so the frequencies match. Hence the system is in resonance, and we can expect the spring to eventually break.     It's not too hard to solve for exactly here to get Graphing this, we get the figure produced in .    A plot of the motion of the mass in         Damped systems  Now we'll take a look at forced, damped systems. Suppose a mass is fixed to a spring with spring force , and is acted upon by a dashpot with force , where and represents the displacement of the mass at time . If the mass is still acted upon by an external force , then by Newton's Second Law the displacement must satisfy The solution is given by , where is found as in and goes to as . With a little help from a computer algebra system such as Sage (see below), we see that where as usual.  Since will always approach in these situations, as time goes on the position is determined increasingly by . We call the transient solution and the steady-state solution . Note that resonance is impossible in this system since and can never overlap (assuming the external force is still a sinusoid). Therefore the smallest amount of damping prevents the mass from going out of control.    Steady-state approximation   An object of mass  3   is fixed to both a spring and a dashpot with respective forces and , where is the displacement of the mass in meters and is the equilibrium position. An external force is also applied to the mass, where is in seconds. The mass was set in motion with an unknown speed and unknown velocity approximately  7   ago. What will be the approximate position of the mass in  40   ?    We know that the position will look like where as , but we can't find the exact form of the transient solution without knowing the initial conditions. So we'll assume that we can estimate the position of the mass using the steady-state solution . Since we get So after  40   more seconds the mass should be around , or about  -0.388   .    In fact, the actual initial conditions used in were and . The corresponding exact solution is The exact value of is within several millionths of the approximation .   "
},
{
  "id": "subsection-undamped-systems-3",
  "level": "2",
  "url": "section-forced-oscillations-and-resonance.html#subsection-undamped-systems-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "external frequency internal frequency resonance "
},
{
  "id": "example-determining-resonance",
  "level": "2",
  "url": "section-forced-oscillations-and-resonance.html#example-determining-resonance",
  "type": "Example",
  "number": "2.5.1",
  "title": "Determining resonance.",
  "body": " Determining resonance   An object with mass  2   is attached to a spring and is held  1   to the right of the spring's equilibrium position by a force of  8   At time seconds the mass is set in motion with an initial velocity of  2    to the left. Suppose an external force acts on the mass as well. Will the spring eventually break?    We can answer this question by determining if resonance is present in this system. The external frequency is , and the internal frequency is . Since and , we have , and so the frequencies match. Hence the system is in resonance, and we can expect the spring to eventually break.   "
},
{
  "id": "figure-forced-oscillations-and-resonance-aside-determining-resonance",
  "level": "2",
  "url": "section-forced-oscillations-and-resonance.html#figure-forced-oscillations-and-resonance-aside-determining-resonance",
  "type": "Figure",
  "number": "2.5.2",
  "title": "",
  "body": " A plot of the motion of the mass in      "
},
{
  "id": "subsection-damped-systems-3",
  "level": "2",
  "url": "section-forced-oscillations-and-resonance.html#subsection-damped-systems-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transient solution steady-state solution "
},
{
  "id": "example-steady-state-approximation",
  "level": "2",
  "url": "section-forced-oscillations-and-resonance.html#example-steady-state-approximation",
  "type": "Example",
  "number": "2.5.3",
  "title": "Steady-state approximation.",
  "body": " Steady-state approximation   An object of mass  3   is fixed to both a spring and a dashpot with respective forces and , where is the displacement of the mass in meters and is the equilibrium position. An external force is also applied to the mass, where is in seconds. The mass was set in motion with an unknown speed and unknown velocity approximately  7   ago. What will be the approximate position of the mass in  40   ?    We know that the position will look like where as , but we can't find the exact form of the transient solution without knowing the initial conditions. So we'll assume that we can estimate the position of the mass using the steady-state solution . Since we get So after  40   more seconds the mass should be around , or about  -0.388   .   "
},
{
  "id": "section-homogeneous-linear-odes-with-constant-coefficients",
  "level": "1",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html",
  "type": "Section",
  "number": "3.1",
  "title": "Homogeneous linear ODEs with constant coefficients",
  "body": " Homogeneous linear ODEs with constant coefficients  Homogeneous ODEs  Each tool that we used for solving second order linear ODEs with constant coefficients, in other words those ODEs of the form , can be extended to solving more general order linear ODEs with constant coefficients, which take the form where are constants and . In this section, we'll focus on solutions of homogeneous  order linear ODEs with constant coefficients. These are the ODEs where in .  Recall that in Chapter 2, the general solution of could be obtained by finding two linearly independent solutions . The general solution was then (which is guaranteed to be a solution by where are arbitrary constants. Similarly, the general solution of is found by obtaining linearly independent solutions . The general solution in this case is now , where are arbitrary constants. Our main tool for showing that a collection of solutions is in fact linearly independent is again the Wronskian .   The Wronskian of several functions  Wronskian Wronskian of several functions    the Wronskian of functions    Let be a collection of functions. Then the Wronskian of , denoted by , is defined by     Just as before, we have the following connection between the Wronskian and linear independence. This theorem is a restatement of for collections involving more than two functions.   Linear independence and the Wronskian (several functions)   Let be some open interval (we often take to be , but it doesn't have to be so) and let be solutions of . If for some point , then is linearly independent.    Now that we have a tool for determining linear independence of several functions, we can also define a basis of solutions for higher order ODEs.   Basis of solutions (higher order ODEs)  higher order ODEs higher order linear ODEs basis   Let and denote solutions of some order linear homogeneous ODE. We call a basis if this set is also linearly independent.    Bases are used to determine general solutions of linear ODEs.   Finding a basis set of solutions   Find the general solution of where is a function of .    Just as we did for second order ODEs, we'll solve this by finding the characteristic equation. To get the characteristic equation, we replace derivatives of with powers of to get Now we need to solve this equation. It can factor (notice that is a solution and then divide by ) as and so This means that the functions are all solutions of the original ODE. If we can show that they're also linearly independent, then this will imply that the general solution of the ODE is given by To do this, we just compute the Wronskian of these functions:   Since the Wronskian is nonzero, and are in fact linearly independent, and so the general solution of this ODE is      It can get tedious to try to compute the Wronskian every time when solving linear ODEs with constant coefficients, so it's good to note that is guaranteed to be linearly independent as long as each of the are distinct from the others.     Find the general solution of , where is a function of .    We begin by finding the characteristic equation, which is This has solutions . This means that and are all solutions of the ODE. Since the roots of the characteristic equation are all distinct, this means that these solutions are linearly independent from each other. Since we have four linearly independent solutions, we can then construct the general solution of this ODE: which we can also rewrite using Euler's Formula to get     In general, any root of the characteristic equation of the form contributes the term to the general solution. As we saw in Chapter 2, it's possible for some characteristic equations to have repeated roots. In this case, we initially weren't able to get enough linearly independent solutions, so we had to adjust our method a bit. The same adjustment will work here.   Characteristic equation with repeated roots   Find the general solution of where is a function of .    The characteristic equation is so . One solution of the ODE will be , and a second solution will be . But since is a repeated root, it does not provide a third linearly independent solution . So we'll use the same trick we used before and multiply by to get a third solution: . It can be verified that is in fact a solution of the ODE, and is also linearly independent from . Therefore the general solution of the ODE is     Solutions of linear, homogeneous ODEs with constant coefficients depend entirely on the roots of the corresponding characteristic equation. If we write the independent variable as , and if denotes a single root of the characteristic equation, then the general solution of the ODE will contain , with the number of exponentials contributed by being equal to its multiplicity. That is, the number of times appears as a solution of the characteristic equation.    A linear, homogeneous ODE with constant coefficients (and independent variable ) has characteristic equation given by What is the general solution of the ODE?     gives the roots of the characterisitc equation and their contributions to the general solution. So the general solution of this ODE is .   Table of roots    Root  Multiplicity  Contribution                              An ODE (with independent variable ) has characteristic equation given by Find the general solution.    We'll set up another table help us determine the general solution:    Root  Multiplicity  Contribution                        So the general solution is     "
},
{
  "id": "definition-the-wronskian-of-several-functions",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#definition-the-wronskian-of-several-functions",
  "type": "Definition",
  "number": "3.1.1",
  "title": "The Wronskian of several functions.",
  "body": " The Wronskian of several functions  Wronskian Wronskian of several functions    the Wronskian of functions    Let be a collection of functions. Then the Wronskian of , denoted by , is defined by    "
},
{
  "id": "theorem-linear-independence-and-the-wronskian-several-functions",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#theorem-linear-independence-and-the-wronskian-several-functions",
  "type": "Theorem",
  "number": "3.1.2",
  "title": "Linear independence and the Wronskian (several functions).",
  "body": " Linear independence and the Wronskian (several functions)   Let be some open interval (we often take to be , but it doesn't have to be so) and let be solutions of . If for some point , then is linearly independent.   "
},
{
  "id": "definition-basis-of-solutions-higher-order",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#definition-basis-of-solutions-higher-order",
  "type": "Definition",
  "number": "3.1.3",
  "title": "Basis of solutions (higher order ODEs).",
  "body": " Basis of solutions (higher order ODEs)  higher order ODEs higher order linear ODEs basis   Let and denote solutions of some order linear homogeneous ODE. We call a basis if this set is also linearly independent.   "
},
{
  "id": "example-finding-a-basis-set-of-solutions",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#example-finding-a-basis-set-of-solutions",
  "type": "Example",
  "number": "3.1.4",
  "title": "Finding a basis set of solutions.",
  "body": " Finding a basis set of solutions   Find the general solution of where is a function of .    Just as we did for second order ODEs, we'll solve this by finding the characteristic equation. To get the characteristic equation, we replace derivatives of with powers of to get Now we need to solve this equation. It can factor (notice that is a solution and then divide by ) as and so This means that the functions are all solutions of the original ODE. If we can show that they're also linearly independent, then this will imply that the general solution of the ODE is given by To do this, we just compute the Wronskian of these functions:   Since the Wronskian is nonzero, and are in fact linearly independent, and so the general solution of this ODE is    "
},
{
  "id": "section-homogeneous-linear-odes-with-constant-coefficients-13",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#section-homogeneous-linear-odes-with-constant-coefficients-13",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "  Find the general solution of , where is a function of .    We begin by finding the characteristic equation, which is This has solutions . This means that and are all solutions of the ODE. Since the roots of the characteristic equation are all distinct, this means that these solutions are linearly independent from each other. Since we have four linearly independent solutions, we can then construct the general solution of this ODE: which we can also rewrite using Euler's Formula to get    "
},
{
  "id": "example-characteristic-equation-with-repeated-roots",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#example-characteristic-equation-with-repeated-roots",
  "type": "Example",
  "number": "3.1.6",
  "title": "Characteristic equation with repeated roots.",
  "body": " Characteristic equation with repeated roots   Find the general solution of where is a function of .    The characteristic equation is so . One solution of the ODE will be , and a second solution will be . But since is a repeated root, it does not provide a third linearly independent solution . So we'll use the same trick we used before and multiply by to get a third solution: . It can be verified that is in fact a solution of the ODE, and is also linearly independent from . Therefore the general solution of the ODE is    "
},
{
  "id": "section-homogeneous-linear-odes-with-constant-coefficients-17",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#section-homogeneous-linear-odes-with-constant-coefficients-17",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": "  A linear, homogeneous ODE with constant coefficients (and independent variable ) has characteristic equation given by What is the general solution of the ODE?     gives the roots of the characterisitc equation and their contributions to the general solution. So the general solution of this ODE is .   Table of roots    Root  Multiplicity  Contribution                           "
},
{
  "id": "section-homogeneous-linear-odes-with-constant-coefficients-18",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#section-homogeneous-linear-odes-with-constant-coefficients-18",
  "type": "Example",
  "number": "3.1.9",
  "title": "",
  "body": "  An ODE (with independent variable ) has characteristic equation given by Find the general solution.    We'll set up another table help us determine the general solution:    Root  Multiplicity  Contribution                        So the general solution is    "
},
{
  "id": "section-non-homogeneous-linear-odes-with-constant-coefficients",
  "level": "1",
  "url": "section-non-homogeneous-linear-odes-with-constant-coefficients.html",
  "type": "Section",
  "number": "3.2",
  "title": "Non-homogeneous linear ODEs with constant coefficients",
  "body": " Non-homogeneous linear ODEs with constant coefficients  Non-homogeneous ODEs  For second order ODEs that were nonhomogeneous, linear and had constant coefficients, we found their general solution by first finding the complementary solution and then a corresponding particular solution . The general solution was then . was found by solving the corresponding homogeneous equation and we used the method of undetermined coefficients to find . Although we are now looking at higher order ODEs, the method of undetermined coefficients remains unchanged.    Find the general solution of     The general solution takes the form , where is a solution of the associated homogeneous equation and is a single solution of the original ODE . Since the characteristic equation of is , we get Now we'll find . Since the right hand side of the ODE is , a good initial guess would be . However, when we take this guess and plug it into the ODE, we'll start seeing terms involving as well (since ) so this means we'll want to include into our guess for also. So we'll modify our guess to be .  Since our guess for doesn't overlap with , we can proceed with plugging our guess into the original ODE and equating coefficients, just as we did before. So we get and , which means that . When solving for , always remember to plug the values you find back into the guess for that you used! So the general solution of the ODE is     Just as before, we also need to worry about overlaps.    Find the appropriate form of for the ODE     We need to find first since will change depending on . Since the characteristic equation of the associated homogeneous ODE is we get   Now we come up with a guess for using the right hand side of the original ODE and dividing it into ``components:''    Component  Contribution to                 However, we now have a problem with overlaps between and . The guess corresponding to the first component overlaps with , so we need to multiply it by to remove the overlap. Similarly, the guess corresponding to the third component overlaps, so we must multiply it by . Therefore, our guess for should be     The method of undetermined coefficients applied to the ODE can be summarized by the following table. Note that is the smallest power of required to remove any overlaps with .    Component of  Contribution to                          Find the general solution of     We begin by finding . Since the characteristic equation of the corresponding homogeneous ODE is , we get or just . So Now we can set up :    Component  Contribution to            So our initial guess for is given by . Plugging this into the ODE into a CAS such as Maple or Sage gives This gives us the system of equations which we can solve using Sage to get   So the general solution of the ODE is      "
},
{
  "id": "section-non-homogeneous-linear-odes-with-constant-coefficients-4",
  "level": "2",
  "url": "section-non-homogeneous-linear-odes-with-constant-coefficients.html#section-non-homogeneous-linear-odes-with-constant-coefficients-4",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": "  Find the general solution of     The general solution takes the form , where is a solution of the associated homogeneous equation and is a single solution of the original ODE . Since the characteristic equation of is , we get Now we'll find . Since the right hand side of the ODE is , a good initial guess would be . However, when we take this guess and plug it into the ODE, we'll start seeing terms involving as well (since ) so this means we'll want to include into our guess for also. So we'll modify our guess to be .  Since our guess for doesn't overlap with , we can proceed with plugging our guess into the original ODE and equating coefficients, just as we did before. So we get and , which means that . When solving for , always remember to plug the values you find back into the guess for that you used! So the general solution of the ODE is    "
},
{
  "id": "section-non-homogeneous-linear-odes-with-constant-coefficients-6",
  "level": "2",
  "url": "section-non-homogeneous-linear-odes-with-constant-coefficients.html#section-non-homogeneous-linear-odes-with-constant-coefficients-6",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  Find the appropriate form of for the ODE     We need to find first since will change depending on . Since the characteristic equation of the associated homogeneous ODE is we get   Now we come up with a guess for using the right hand side of the original ODE and dividing it into ``components:''    Component  Contribution to                 However, we now have a problem with overlaps between and . The guess corresponding to the first component overlaps with , so we need to multiply it by to remove the overlap. Similarly, the guess corresponding to the third component overlaps, so we must multiply it by . Therefore, our guess for should be    "
},
{
  "id": "section-non-homogeneous-linear-odes-with-constant-coefficients-9",
  "level": "2",
  "url": "section-non-homogeneous-linear-odes-with-constant-coefficients.html#section-non-homogeneous-linear-odes-with-constant-coefficients-9",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Find the general solution of     We begin by finding . Since the characteristic equation of the corresponding homogeneous ODE is , we get or just . So Now we can set up :    Component  Contribution to            So our initial guess for is given by . Plugging this into the ODE into a CAS such as Maple or Sage gives This gives us the system of equations which we can solve using Sage to get   So the general solution of the ODE is    "
},
{
  "id": "section-systems-of-odes-as-models",
  "level": "1",
  "url": "section-systems-of-odes-as-models.html",
  "type": "Section",
  "number": "4.1",
  "title": "Systems of ODEs as models",
  "body": " Systems of ODEs as models  Interdependent quantities can often be represented mathematically by a system of equations. If we have information about the rates of change of these quantities, then we may be able to develop a model using a system of differential equations.   first-order systems definition   A first order system of ODEs is a system of differential equations involving some collection of functions and their first derivatives.    We are still only dealing with ordinary differential equations which means that we will only ever have one independent variable. However, when dealing with systems of ODEs we will be working with several dependent variables.  The systems of ODEs that we will consider will typically look like the following: where are constants and are functions of .   Modeling interconnected tanks   Two brine tanks are set up as in . Fresh water flows into the tank at a rate of , well-mixed solution flows from Tank 1 to Tank 2 at a rate of and well-mixed solution flows out of Tank 2 at a rate of . Suppose that and are 5 , the volume of solution in Tank 1 is 10 and the volume of solution in Tank 2 is 7 . Suppose Tank 1 has 5 of salt at time and Tank 2 has 2 of salt at time . Set up a first-order system that describes the amount of salt in each tank at time .    Let denote the amount of salt in Tank 1 at time , and denote the amount of salt in Tank 2 at time . Using the mixture ODE developed in , we can write or just with initial conditions and .     The two interconnected tanks from     A diagram representing a system of two interconnected tanks. Fresh water is flowing into the first tank. The well-mixed solution then flows from the first tank into the second tank. The well-mixed solution from the second tank then flows out of the system.      To actually solve systems of ODEs, we'll use matrices to rewrite these systems as matrix ODEs .   Matrices and vectors  matrices definition  vectors definition matrices   An  matrix is an array of rows and columns. matrices are called ( column ) vectors . Matrices are typically denoted with capital italic letters (such as , ) and vectors are often denoted with lower case bold letters (such as . A zero matrix will be denoted using .    As a brief example, let Then is a matrix and is a vector.   Matrix-vector product   Let be the matrix and let . Then their product  is the vector defined to be The  identity matrix is the matrix . A scalar is just a constant. To multiply a scalar with a matrix , just multiply every element of with .    If is any matrix and and vector, then and .   Computing a matrix-vector product   Let and . Compute and .    By definition,     In , notice that . This means that didn't really do all that much to except to stretch it by a factor of . Vectors with this property will turn out to be the key to solving our systems of ODEs.   Any linear system can be written as an equivalent first-order system or matrix ODE.   Interconnected spring-mass system   Consider a spring mass system with two masses arranged as follows:    A diagram representing two masses connected horizontally by springs. The first mass is connected to a wall by a spring. The first mass is also connected to the second mass by another spring with a possibly different spring constant.     Determine a first-order system that the displacements and must satisfy.    From we know how to model a spring-mass system with a single mass using Hooke's law and Newton's Second Law. We will apply this same analysis to the displacements and individually.  To begin, we will analyze the forces acting on the first mass. Here there are two forces to consider: the force caused by the motion of and the force caused by the motion of . Likewise, the second mass is also influenced by two forces. We arrange these in the following table:    mass  forces            Now we can apply Newton's Second Law to get the second -order system . At this point we can introduce new dependent variables and to get an equivalent first-order system.  Although this type of system is new, the solutions behave as expected. In particular, both and display periodic motion as can be seen by the Sage example below.      Eigenvectors and eigenvalues  matrices eigenvalues and eigenvectors   Let be a matrix. A nonzero vector is an eigenvector of if for some scalar . We call an eigenvalue of corresponding to the eigenvector .     Determining if a vector is an eigenvector   Determine if is an eigenvector of .    To do this, we just need to compute  . So is an eigenvector of with corresponding eigenvalue .    Since we will be looking at systems of ODEs which involve functions, we will need to define vector-valued functions. These objects will represent the solutions of our systems.   Vector-valued functions  vectors vector-valued functions      a vector whose elements are functions    A vector-valued function is a vector whose elements are functions. If each of the functions in a vector depends on the variable , we often write to denote this. The derivative of a vector-valued function is the new vector-valued function .    We now have all of the tools we need to rewrite a first-order system as a matrix ODE. Let If and , then . In other words, we may rewrite the system as the matrix ODE .   Writing a system as a matrix ODE   Write the system as a matrix ODE.    We need to find a matrix and vector to let us rewrite this system. The matrix is formed from the coefficients of on the right hand side of the system: The vector is just made up of the dependent variables : With these terms, the original system of ODEs is equivalent to the single matrix ODE      Solution of a matrix ODE   Show that where is a solution of the system     We'll check that is a solution of the matrix ODE just as we check solutions for normal ODEs: plug the potential solution into the ODE and check both sides. If we do so, we get and . Since these expressions match, this means that is a solution of the ODE.    One thing to note about the previous example is that was an eigenvector of with corresponding eigenvalue . See . This suggests that solutions of the matrix ODE take the form , where is an eigenvalue of with corresponding eigenvector . One last concept we need is that of linear independence of vectors.   Linear independence of vectors  linear independence vectors   Let denote a collection of vectors. We say that the vectors are linearly independent if the equality is possible if and only if . Otherwise, we say that the vectors are linearly dependent .    Just as before, our primary tool for showing if a collection is linearly independent is the Wronskian.   Wronskian vectors      the Wronskian of vectors    The Wronskian of is the number defined by The vectors are linearly independent if and only if their Wronskian is nonzero.    "
},
{
  "id": "definition-first-order-system",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-first-order-system",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": " first-order systems definition   A first order system of ODEs is a system of differential equations involving some collection of functions and their first derivatives.   "
},
{
  "id": "example-interconnected-tanks",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#example-interconnected-tanks",
  "type": "Example",
  "number": "4.1.2",
  "title": "Modeling interconnected tanks.",
  "body": " Modeling interconnected tanks   Two brine tanks are set up as in . Fresh water flows into the tank at a rate of , well-mixed solution flows from Tank 1 to Tank 2 at a rate of and well-mixed solution flows out of Tank 2 at a rate of . Suppose that and are 5 , the volume of solution in Tank 1 is 10 and the volume of solution in Tank 2 is 7 . Suppose Tank 1 has 5 of salt at time and Tank 2 has 2 of salt at time . Set up a first-order system that describes the amount of salt in each tank at time .    Let denote the amount of salt in Tank 1 at time , and denote the amount of salt in Tank 2 at time . Using the mixture ODE developed in , we can write or just with initial conditions and .   "
},
{
  "id": "figure-interconnected-tanks",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#figure-interconnected-tanks",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": " The two interconnected tanks from     A diagram representing a system of two interconnected tanks. Fresh water is flowing into the first tank. The well-mixed solution then flows from the first tank into the second tank. The well-mixed solution from the second tank then flows out of the system.     "
},
{
  "id": "definition-matrices-and-vectors",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-matrices-and-vectors",
  "type": "Definition",
  "number": "4.1.4",
  "title": "Matrices and vectors.",
  "body": " Matrices and vectors  matrices definition  vectors definition matrices   An  matrix is an array of rows and columns. matrices are called ( column ) vectors . Matrices are typically denoted with capital italic letters (such as , ) and vectors are often denoted with lower case bold letters (such as . A zero matrix will be denoted using .   "
},
{
  "id": "definition-matrix-vector-product",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-matrix-vector-product",
  "type": "Definition",
  "number": "4.1.5",
  "title": "Matrix-vector product.",
  "body": " Matrix-vector product   Let be the matrix and let . Then their product  is the vector defined to be The  identity matrix is the matrix . A scalar is just a constant. To multiply a scalar with a matrix , just multiply every element of with .   "
},
{
  "id": "example-systems-odes-matrix-vector-product",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#example-systems-odes-matrix-vector-product",
  "type": "Example",
  "number": "4.1.6",
  "title": "Computing a matrix-vector product.",
  "body": " Computing a matrix-vector product   Let and . Compute and .    By definition,    "
},
{
  "id": "example-systems-odes-interconnected-spring-mass-system",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#example-systems-odes-interconnected-spring-mass-system",
  "type": "Example",
  "number": "4.1.7",
  "title": "Interconnected spring-mass system.",
  "body": " Interconnected spring-mass system   Consider a spring mass system with two masses arranged as follows:    A diagram representing two masses connected horizontally by springs. The first mass is connected to a wall by a spring. The first mass is also connected to the second mass by another spring with a possibly different spring constant.     Determine a first-order system that the displacements and must satisfy.    From we know how to model a spring-mass system with a single mass using Hooke's law and Newton's Second Law. We will apply this same analysis to the displacements and individually.  To begin, we will analyze the forces acting on the first mass. Here there are two forces to consider: the force caused by the motion of and the force caused by the motion of . Likewise, the second mass is also influenced by two forces. We arrange these in the following table:    mass  forces            Now we can apply Newton's Second Law to get the second -order system . At this point we can introduce new dependent variables and to get an equivalent first-order system.  Although this type of system is new, the solutions behave as expected. In particular, both and display periodic motion as can be seen by the Sage example below.    "
},
{
  "id": "definition-eigenvectors-and-eigenvalues",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-eigenvectors-and-eigenvalues",
  "type": "Definition",
  "number": "4.1.8",
  "title": "Eigenvectors and eigenvalues.",
  "body": " Eigenvectors and eigenvalues  matrices eigenvalues and eigenvectors   Let be a matrix. A nonzero vector is an eigenvector of if for some scalar . We call an eigenvalue of corresponding to the eigenvector .   "
},
{
  "id": "example-eigenvalue-eigenvector",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#example-eigenvalue-eigenvector",
  "type": "Example",
  "number": "4.1.9",
  "title": "Determining if a vector is an eigenvector.",
  "body": " Determining if a vector is an eigenvector   Determine if is an eigenvector of .    To do this, we just need to compute  . So is an eigenvector of with corresponding eigenvalue .   "
},
{
  "id": "definition-vector-valued-function",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-vector-valued-function",
  "type": "Definition",
  "number": "4.1.10",
  "title": "Vector-valued functions.",
  "body": " Vector-valued functions  vectors vector-valued functions      a vector whose elements are functions    A vector-valued function is a vector whose elements are functions. If each of the functions in a vector depends on the variable , we often write to denote this. The derivative of a vector-valued function is the new vector-valued function .   "
},
{
  "id": "example-systems-odes-matrix-ode",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#example-systems-odes-matrix-ode",
  "type": "Example",
  "number": "4.1.11",
  "title": "Writing a system as a matrix ODE.",
  "body": " Writing a system as a matrix ODE   Write the system as a matrix ODE.    We need to find a matrix and vector to let us rewrite this system. The matrix is formed from the coefficients of on the right hand side of the system: The vector is just made up of the dependent variables : With these terms, the original system of ODEs is equivalent to the single matrix ODE    "
},
{
  "id": "example-systems-odes-matrix-ode-solution",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#example-systems-odes-matrix-ode-solution",
  "type": "Example",
  "number": "4.1.12",
  "title": "Solution of a matrix ODE.",
  "body": " Solution of a matrix ODE   Show that where is a solution of the system     We'll check that is a solution of the matrix ODE just as we check solutions for normal ODEs: plug the potential solution into the ODE and check both sides. If we do so, we get and . Since these expressions match, this means that is a solution of the ODE.   "
},
{
  "id": "definition-linear-independence-of-vectors",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-linear-independence-of-vectors",
  "type": "Definition",
  "number": "4.1.13",
  "title": "Linear independence of vectors.",
  "body": " Linear independence of vectors  linear independence vectors   Let denote a collection of vectors. We say that the vectors are linearly independent if the equality is possible if and only if . Otherwise, we say that the vectors are linearly dependent .   "
},
{
  "id": "definition-wronskian-of-vectors",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-wronskian-of-vectors",
  "type": "Definition",
  "number": "4.1.14",
  "title": "",
  "body": " Wronskian vectors      the Wronskian of vectors    The Wronskian of is the number defined by The vectors are linearly independent if and only if their Wronskian is nonzero.   "
},
{
  "id": "section-constant-coefficient-systems-and-the-phase-plane",
  "level": "1",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html",
  "type": "Section",
  "number": "4.2",
  "title": "Constant coefficient systems",
  "body": " Constant coefficient systems   The content in this section represents a higher-dimensional analog of the content in .    Solutions of  A system of ODEs involving only constant coefficients can be rewritten as a matrix ODE of the form where is a constant matrix. Such a system can be solved using exponentials.   Solutions of systems   Let be an constant matrix, and suppose that has linearly independent eigenvectors with corresponding eigenvalues . Then the general solution of is given by       Find the general solution of the system given that are eigenvectors of the matrix with corresponding eigenvalues .    First, note that the system we need to solve is equivalent to the matrix ODE . If we can show that are linearly independent, then we can use to find the general solution of the system. So we'll compute their Wronskian: .  Since the Wronskian is nonzero, these eigenvectors are linearly independent. Therefore the general solution of the system is given by or just       Finding eigenvalues and eigenvectors   shows that solving systems of first-order ODEs comes down to finding eigenvalues and eigenvectors of the corresponding matrix ODE. So it's important for us to know how to find these.  Let be an matrix and suppose that is an eigenvector with corresponding eigenvalue . Then . We can rearrange this to get where is the identity matrix. Since (since it's an eigenvector!), linear algebra tells us that . This gives us the following definition and theorem.     is called the characteristic equation of the matrix .     Eigenvalues and the characteristic equation   The eigenvalues of a square matrix are the solutions of the equation .     Finding eigenvalues of a matrix   Find the eigenvalues of the matrix .    First, we need to set up the characteristic equation of . Since , we get so the characteristic equation of is which has solutions . So the eigenvalues of are .    These computations are easily verified by Sage or MATLAB\/Octave. Sage can provide exact answers but the code is somewhat cumbersome. MATLAB on the other hand is designed for performing matrix computations and therefore its code for finding eigenvalues is simpler. We only need to use the eig command:   A useful fact to remember is that the eigenvalues of a triangular matrix are just the diagonal entries.   Finding the eigenvalues of a triangular matrix   Let . Find the eigenvalues of .     is a triangular matrix since everything below the main diagonal is . Therefore the eigenvalues of are .    Once we have the eigenvalues of a matrix, we can find their corresponding eigenvectors.   Finding eigenvectors for a matrix   Find eigenvectors of corresponding to the eigenvalues and .    Suppose that is an eigenvector corresponding to . Then we know that . This tells us that if is an eigenvector for , then its entries need to satisfy which boils down to   Now set to get the system and so . We don't really care about what the entries of look like so long as is an eigenvector, so we can pick however we want, just so long as they satisfy this relation (and are not both !). So pick , which forces . Then is an eigenvector of corresponding to the eigenvalue .  To find an eigenvector for we just set and run through the same process: The second equation simplifies to , so one eigenvector for is     Of course, all of this can be done in Sage or MATLAB\/Octave as well. If we use MATLAB\/Octave, then the eig command once again does the heavy lifting for us. Each column of the matrix produced below is an eigenvector of .   Looking forward to , note that the eigenvectors we found in are linearly indepednent. This can be verified by computing the Wronskian as done using Sage below:   You may have noticed that the matrix constructed in the Sage cell here is actually flipped : the eigenvectors are appearing as the rows instead of the columns. It turns out that this causes no problems for us since turning rows into columns (or columns into rows) has no affect on the determinant. Therefore the Wronskian is unchanged.      Solving matrix odes  We now have the tools we need to begin solving matrix ODEs. Recall that if is an matrix with constant entries, and if are linearly independent solutions of the matrix ODE , then the general solution of the matrix ODE is . Furthermore, if is an eigenvalue of with eigenvector , then is a solution of . So solving the matrix ODE requires finding enough eigenvectors and eigenvalues. A useful theorem is the following:   Distinct eigenvalues and linear independence   Let be an matrix with constant entries. If the eigenvalues of are distinct (that is, none are repeated) then eigenvectors associated with different eigenvalues are linearly independent. That is, if is an eigenvector corresponding to then the eigenvectors are linearly independent.     Solving a matrix ODE   Solve the matrix ODE given by where .    We already have everything we need. We know that the eigenvalues of are and from , and likewise some corresponding eigenvectors are thanks to . Since the eigenvalues are distinct it follows that these eigenvectors are linearly independent (we could also check this using the Wronskian). We can therefore build two linearly independent solutions to the matrix ODE: . So the general solution of the matrix ODE is .  Note that the choice of eigenvector doesn't matter . We only need to find enough linearly independent eigenvectors for each distinct eigenvalue.     Solving a first-order system with two equations   Solve the first-order system given by where and are functions of .    First, note that this system is equivalent to the matrix ODE where . To solve this system we need to find the eigenvalues and eigenvectors of , and then use these to build our general solution.   Find the eigenvalues.  We find the eigenvalues of by solving the characteristic equation for . Since , we see that the eigenvalues of are and . The fact that these eigenvalues are complex is not a problem. They're still distinct, so our method will work.    Find corresponding eigenvectors.  Set . Then implies that or just Setting in the second equation gives , so an eigenvector of corresponding to is . Similarly, an eigenvector corresponding to is .    Find the general solution.  At this step it is easy to construct the solution of the matrix ODE. It's just         Solving a system of three differential equations   Solve the first-order system .    As long as this system has distinct eigenvalues the above method will work. Once again we rewrite the system as a matrix ODE; in this case, the matrix ODE we must solve is .  To find the eigenvalues we must solve the characteristic equation . However, we can also use Sage to perform this task.   We could also use MATLAB\/Octave, but the resulting eigenvectors wouldn't look as nice as the output provided by Sage. This is because MATLAB's eig command produces normalized output which often involves dividing entries by square roots.    This produces a list containing the eigenvalues of as well as the corresponding eigenvectors. So we see that the eigenvalues are given by , while the corresponding eigenvectors are given by .  We now have everything we need for the general solution of the matrix ODE. It's just .      Applications of matrix ODEs  Now we use matrix ODEs to model physical systems. The methods we've developed for solving matrix ODEs will then let us come up with descriptions for such systems. Recall that we introduced systems of ODEs (and then matrix ODEs) to model quantities that depended on time (an independent variable) and each other (dependent variables). The physical systems we will consider will be ones where the quantities of interest depend on each other in some way.   Determining salt concentration in connected tank system   Two brine tanks are set up as in . Fresh water flows into the tank at a rate of , well-mixed solution flows from Tank 1 to Tank 2 at a rate of and well-mixed solution flows out of Tank 2 at a rate of . Suppose that and are 5 , the volume of solution in Tank 1 is 10 and the volume of solution in Tank 2 is 7 . Suppose Tank 1 has 5 of salt at time and Tank 2 has 2 of salt at time . How much salt is in each tank at time ?    To start, let denote the amount of salt in Tank 1 at time and denote the amount of salt in Tank 2 at time , where is in minutes. Then from Section 4.1, we know that . If we set then this system is equivalent to the matrix ODE .  To solve this, we find the eigenvalues and corresponding eigenvectors. To find the eigenvalues, we could solve the characteristic equation or use technology, but it's easier to note that is a triangular matrix. So the eigenvalues are just .  Now we find corresponding eigenvectors. So let . If is an eigenvector for , then we know , which gives the system . If we set , then we just get . So an eigenvector corresponding to is .  Similarly, if we set we get , but no restrictions on . So an eigenvector corresponding to is .  We can now write down the general solution of the matrix ODE: . But we're not done yet, since we have the initial conditions and , or in terms of our matrix ODE . We can use this to find and . If we set then we get , so and .  So the solution of the matrix ODE (and hence the original system) is . The amount of salt in the first tank, , is given by the top entry and the amount of salt in the second tank, , is given by the bottom entry.     "
},
{
  "id": "theorem-solutions-of-matrix-odes-constant-coefficients",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#theorem-solutions-of-matrix-odes-constant-coefficients",
  "type": "Theorem",
  "number": "4.2.1",
  "title": "Solutions of systems.",
  "body": " Solutions of systems   Let be an constant matrix, and suppose that has linearly independent eigenvectors with corresponding eigenvalues . Then the general solution of is given by    "
},
{
  "id": "subsection-matrix-odes-constant-coefficients-4",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#subsection-matrix-odes-constant-coefficients-4",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Find the general solution of the system given that are eigenvectors of the matrix with corresponding eigenvalues .    First, note that the system we need to solve is equivalent to the matrix ODE . If we can show that are linearly independent, then we can use to find the general solution of the system. So we'll compute their Wronskian: .  Since the Wronskian is nonzero, these eigenvectors are linearly independent. Therefore the general solution of the system is given by or just    "
},
{
  "id": "definition-characteristic-equation",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#definition-characteristic-equation",
  "type": "Definition",
  "number": "4.2.3",
  "title": "",
  "body": "   is called the characteristic equation of the matrix .   "
},
{
  "id": "theorem-theorem-eigenvalues-from-characteristic-equation",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#theorem-theorem-eigenvalues-from-characteristic-equation",
  "type": "Theorem",
  "number": "4.2.4",
  "title": "Eigenvalues and the characteristic equation.",
  "body": " Eigenvalues and the characteristic equation   The eigenvalues of a square matrix are the solutions of the equation .   "
},
{
  "id": "example-system-odes-finding-eigenvalues-2x2",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-system-odes-finding-eigenvalues-2x2",
  "type": "Example",
  "number": "4.2.5",
  "title": "Finding eigenvalues of a <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(2\\times2\\)<\/span> matrix.",
  "body": " Finding eigenvalues of a matrix   Find the eigenvalues of the matrix .    First, we need to set up the characteristic equation of . Since , we get so the characteristic equation of is which has solutions . So the eigenvalues of are .   "
},
{
  "id": "system-odes-eigenvalues-triangular-matrix",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#system-odes-eigenvalues-triangular-matrix",
  "type": "Example",
  "number": "4.2.6",
  "title": "Finding the eigenvalues of a triangular matrix.",
  "body": " Finding the eigenvalues of a triangular matrix   Let . Find the eigenvalues of .     is a triangular matrix since everything below the main diagonal is . Therefore the eigenvalues of are .   "
},
{
  "id": "example-system-odes-finding-eigenvectors-2x2",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-system-odes-finding-eigenvectors-2x2",
  "type": "Example",
  "number": "4.2.7",
  "title": "Finding eigenvectors for a <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(2\\times2\\)<\/span> matrix.",
  "body": " Finding eigenvectors for a matrix   Find eigenvectors of corresponding to the eigenvalues and .    Suppose that is an eigenvector corresponding to . Then we know that . This tells us that if is an eigenvector for , then its entries need to satisfy which boils down to   Now set to get the system and so . We don't really care about what the entries of look like so long as is an eigenvector, so we can pick however we want, just so long as they satisfy this relation (and are not both !). So pick , which forces . Then is an eigenvector of corresponding to the eigenvalue .  To find an eigenvector for we just set and run through the same process: The second equation simplifies to , so one eigenvector for is    "
},
{
  "id": "theorem-linear-independence-distinct-eigenvalues",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#theorem-linear-independence-distinct-eigenvalues",
  "type": "Theorem",
  "number": "4.2.8",
  "title": "Distinct eigenvalues and linear independence.",
  "body": " Distinct eigenvalues and linear independence   Let be an matrix with constant entries. If the eigenvalues of are distinct (that is, none are repeated) then eigenvectors associated with different eigenvalues are linearly independent. That is, if is an eigenvector corresponding to then the eigenvectors are linearly independent.   "
},
{
  "id": "example-systems-ode-solving-2x2-matrix-ode",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-systems-ode-solving-2x2-matrix-ode",
  "type": "Example",
  "number": "4.2.9",
  "title": "Solving a matrix ODE.",
  "body": " Solving a matrix ODE   Solve the matrix ODE given by where .    We already have everything we need. We know that the eigenvalues of are and from , and likewise some corresponding eigenvectors are thanks to . Since the eigenvalues are distinct it follows that these eigenvectors are linearly independent (we could also check this using the Wronskian). We can therefore build two linearly independent solutions to the matrix ODE: . So the general solution of the matrix ODE is .  Note that the choice of eigenvector doesn't matter . We only need to find enough linearly independent eigenvectors for each distinct eigenvalue.   "
},
{
  "id": "example-systems-odes-solving-system-two-equations",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-systems-odes-solving-system-two-equations",
  "type": "Example",
  "number": "4.2.10",
  "title": "Solving a first-order system with two equations.",
  "body": " Solving a first-order system with two equations   Solve the first-order system given by where and are functions of .    First, note that this system is equivalent to the matrix ODE where . To solve this system we need to find the eigenvalues and eigenvectors of , and then use these to build our general solution.   Find the eigenvalues.  We find the eigenvalues of by solving the characteristic equation for . Since , we see that the eigenvalues of are and . The fact that these eigenvalues are complex is not a problem. They're still distinct, so our method will work.    Find corresponding eigenvectors.  Set . Then implies that or just Setting in the second equation gives , so an eigenvector of corresponding to is . Similarly, an eigenvector corresponding to is .    Find the general solution.  At this step it is easy to construct the solution of the matrix ODE. It's just       "
},
{
  "id": "example-systems-odes-3x3-system",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-systems-odes-3x3-system",
  "type": "Example",
  "number": "4.2.11",
  "title": "Solving a system of three differential equations.",
  "body": " Solving a system of three differential equations   Solve the first-order system .    As long as this system has distinct eigenvalues the above method will work. Once again we rewrite the system as a matrix ODE; in this case, the matrix ODE we must solve is .  To find the eigenvalues we must solve the characteristic equation . However, we can also use Sage to perform this task.   We could also use MATLAB\/Octave, but the resulting eigenvectors wouldn't look as nice as the output provided by Sage. This is because MATLAB's eig command produces normalized output which often involves dividing entries by square roots.    This produces a list containing the eigenvalues of as well as the corresponding eigenvectors. So we see that the eigenvalues are given by , while the corresponding eigenvectors are given by .  We now have everything we need for the general solution of the matrix ODE. It's just .   "
},
{
  "id": "example-system-odes-brine-tanks-model-solution",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-system-odes-brine-tanks-model-solution",
  "type": "Example",
  "number": "4.2.12",
  "title": "Determining salt concentration in connected tank system.",
  "body": " Determining salt concentration in connected tank system   Two brine tanks are set up as in . Fresh water flows into the tank at a rate of , well-mixed solution flows from Tank 1 to Tank 2 at a rate of and well-mixed solution flows out of Tank 2 at a rate of . Suppose that and are 5 , the volume of solution in Tank 1 is 10 and the volume of solution in Tank 2 is 7 . Suppose Tank 1 has 5 of salt at time and Tank 2 has 2 of salt at time . How much salt is in each tank at time ?    To start, let denote the amount of salt in Tank 1 at time and denote the amount of salt in Tank 2 at time , where is in minutes. Then from Section 4.1, we know that . If we set then this system is equivalent to the matrix ODE .  To solve this, we find the eigenvalues and corresponding eigenvectors. To find the eigenvalues, we could solve the characteristic equation or use technology, but it's easier to note that is a triangular matrix. So the eigenvalues are just .  Now we find corresponding eigenvectors. So let . If is an eigenvector for , then we know , which gives the system . If we set , then we just get . So an eigenvector corresponding to is .  Similarly, if we set we get , but no restrictions on . So an eigenvector corresponding to is .  We can now write down the general solution of the matrix ODE: . But we're not done yet, since we have the initial conditions and , or in terms of our matrix ODE . We can use this to find and . If we set then we get , so and .  So the solution of the matrix ODE (and hence the original system) is . The amount of salt in the first tank, , is given by the top entry and the amount of salt in the second tank, , is given by the bottom entry.   "
},
{
  "id": "section-phase-plane-criteria-for-critical-points-stability",
  "level": "1",
  "url": "section-phase-plane-criteria-for-critical-points-stability.html",
  "type": "Section",
  "number": "4.3",
  "title": "Phase portraits and critical points",
  "body": " Phase portraits and critical points   The techniques used in to study long-term behavior of solutions near critical points can be adapted to higher dimensional systems as well. The main difference now is that we must consider the phase plane instead of a simple one-dimensional number line. This also allows for different types of behavior at critical points for solutions, or trajectories , near the critical point.    The phase plane  Just as we were able to plot direction fields for first-order autonomous ODEs, we can do something similar for autonomous first-order systems with two equations and constant coefficients. These are precisely the systems that can be written as a matrix ODE of the form where is a matrix.  Consider the first-order system or . The solution of this system looks like .  As varies, will trace out a curve in the -plane, which we call a trajectory . The -plane is called the phase plane , and the collection of all trajectories of the system is called the phase portrait of the system. The phase portrait of a system provides us with a way to study the behavior of solutions of without actually solving the system.   Sketching a phase portrait   Sketch a phase portrait for the system     First, note that we can rewrite the system as using . Now, we can view as corresponding to a point in the phase plane. Hence corresponds to a tangent of a trajectory passing through the point .  For example, let's find the tangent at the point . The tangent is given by the corresponding at this point which is just : . So at the point in the phase plane, the trajectory should be heading in the same direction as that of the point relative to the origin. In other words, the tangent vector would point two units left and two units down from the point .  Similarly, if we let then we get . So the trajectory going through in the phase plane should be heading in the direction of viewed from the origin. Plotting other points in the phase plane like this, we get the image below.     One thing we can see from this is that trajectories that lie on the line , which corresponds to the initial conditions , appear to approach the origin while all others move away from the origin. Likewise, the trajectories on the line move directly away from the origin. We can see why this is by looking at the general solution of the original system, which is .  If lies on the line , then has to equal , which follows from the fact that and are linearly independent. So trajectories that lie on the line must take the form , and every solution of this form goes to as . Every other trajectory will move away from the origin as , although the trajectories that lie on the line will travel to the origin as (i.e. backwards in time ):    Vector fields can also be plotted easily using SageMath. The code cell below demonstrates the use of the plot_vector_field command to sketch the phase portrait from .   Note that is always a solution of . This is because . We call the equilibrium solution or critical point of the system . Later in this section, we will be concerned with the behavior of trajectories of the system near the equilibrium solution . One thing we will see is that the behavior is determined in large part by the eigenvalues of the matrix .  We will separate the behavior of trajectories at the critical point into five different cases:   Types of critical points    Classification  Behavior at    Improper node  Every trajectory except two has the same limiting tangent at    Proper node  For every direction there exists trajectory with limiting tangent    Saddle point  Two incoming trajectories, two outgoing trajectories; all others bypass    Center  is enclosed by infinitely many closed (repeating) trajectories    Spiral point  Trajectories spiral inwards or outwards from      was a saddle point in since there were incoming trajectories on the line and outgoing trajectories on the line as indicated in the corresponding phase portrait.   Classifying a critical point using a phase portrait   Using a phase portrait, determine the type of critical point that is for the matrix ODE where .    This system produces the following phase portrait:     As seen above, every (nonzero) trajectory will spiral outward from as , so is a spiral point of this system. To see why, we only need to look at the eigenvalues of , which we find to be . This means that the general solution of must look like .  The real part of the eigenvalues leads to the growth term of appearing in the solution, which causes the trajectories to diverge as . The imaginary part of the eigenvalues leads to the oscillating terms of appearing in the solution, which gives the trajectories their spiral motion.    In general, the eigenvalues of the matrix in the system will determine the type of critical point that is for the system .   Classifying trajectories algebraically   What kind of critical point is for the system where ?    We could sketch the phase portrait for this system, but we can also determine the behavior of the trajectories if we can find a relationship between and . To do so, we cross-multiply the system to get . So we can integrate this to get .  This is the equation of a circle of radius , and so every trajectory for this system will be a circle centered at . Hence is a center.      Eigenvalue criteria for stability  Consider the matrix ODE . Let denote the eigenvalues of the matrix . Then we can classify using .   Eigenvalue conditions for stability    Name  Conditions on    Node  Real, same sign    Saddle point  Real, opposite sign    Center  Pure imaginary    Spiral point  Complex, not pure imaginary      The rule of thumb is this: the real parts of the eigenvalues determine whether a trajectory moves towards or away from the origin, and the imaginary part determines if the trajectory has a periodic\/oscillating nature to it.   We say that the origin is a stable critical point of if all trajectories that start close to remain close at all future times. Equivalently, it's stable if each trajectory will eventually be contained within some circle centered at the origin as . Otherwise, we say that is unstable . If it so happens that every trajectory that starts close to tends to as , we then say that is a stable and attractive (or asymptotically stable ) critical point. Equivalently, is asymptotically stable if every trajectory goes to as .   Eigenvalue conditions for asymptotic stability   Let denote a matrix ODE where is a constant matrix. What conditions on the eigenvalues of will give an asymptotically stable critical point at ?    Let denote a nonzero solution of the matrix ODE (and therefore a trajectory). Then in order for to be asymptotically stable, we need as . Let denote the eigenvalues of . Then will have the form .  The previous paragraph shows that must go to as if either or if each exponential goes to as . Since we assume , this means we need for as . This implies that the real part of each eigenvalue must be negative, because the real part of each eigenvalue is what determines the growth of : if , then . So is asymptotically stable if the real parts of both eigenvalues are negative.    By a similar argument to that used in , we can say that is stable as long as the real part of each eigenvalue is no greater than . Likewise, is unstable if the real part of any eigenvalue is positive.   Long term behavior of a system of interconnected tanks   Two tanks and containing  200   each of a water-salt mixture are set up as follows:   Tank 1: Pure water flows in at  12    and solution from Tank 2 flows in at  4    ; solution also flows out of Tank 1 and into Tank 2 at  16    .    Solution from Tank 1 flows in at  16    ; solution flows out of Tank 2 and into Tank 1 at  4    , and solution is emptied from Tank 2 at an addition rate of  12       Will the salt eventually empty from both tanks?    Let denote the amount of salt (in pounds) in Tank 1 at time (in minutes), and let do the same for Tank 2. Then . This system is equivalent to the matrix ODE where . We need to determine the long-term behavior of solutions of this ODE, which is itself determined by the eigenvalues of .  The eigenvalues of are . Since both eigenvalues have negative real part, it follows that is an asymptotically stable critical point of . Therefore every trajectory as . So no matter how much salt is initially in the tanks, the amount of salt will always go to .     "
},
{
  "id": "subsection-the-phase-plane-4",
  "level": "2",
  "url": "section-phase-plane-criteria-for-critical-points-stability.html#subsection-the-phase-plane-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trajectory phase plane phase portrait "
},
{
  "id": "example-sketch-phase-portrait",
  "level": "2",
  "url": "section-phase-plane-criteria-for-critical-points-stability.html#example-sketch-phase-portrait",
  "type": "Example",
  "number": "4.3.1",
  "title": "Sketching a phase portrait.",
  "body": " Sketching a phase portrait   Sketch a phase portrait for the system     First, note that we can rewrite the system as using . Now, we can view as corresponding to a point in the phase plane. Hence corresponds to a tangent of a trajectory passing through the point .  For example, let's find the tangent at the point . The tangent is given by the corresponding at this point which is just : . So at the point in the phase plane, the trajectory should be heading in the same direction as that of the point relative to the origin. In other words, the tangent vector would point two units left and two units down from the point .  Similarly, if we let then we get . So the trajectory going through in the phase plane should be heading in the direction of viewed from the origin. Plotting other points in the phase plane like this, we get the image below.     One thing we can see from this is that trajectories that lie on the line , which corresponds to the initial conditions , appear to approach the origin while all others move away from the origin. Likewise, the trajectories on the line move directly away from the origin. We can see why this is by looking at the general solution of the original system, which is .  If lies on the line , then has to equal , which follows from the fact that and are linearly independent. So trajectories that lie on the line must take the form , and every solution of this form goes to as . Every other trajectory will move away from the origin as , although the trajectories that lie on the line will travel to the origin as (i.e. backwards in time ):   "
},
{
  "id": "subsection-the-phase-plane-8",
  "level": "2",
  "url": "section-phase-plane-criteria-for-critical-points-stability.html#subsection-the-phase-plane-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium solution critical point "
},
{
  "id": "table-systems-ode-critical-point-types",
  "level": "2",
  "url": "section-phase-plane-criteria-for-critical-points-stability.html#table-systems-ode-critical-point-types",
  "type": "Table",
  "number": "4.3.2",
  "title": "Types of critical points",
  "body": " Types of critical points    Classification  Behavior at    Improper node  Every trajectory except two has the same limiting tangent at    Proper node  For every direction there exists trajectory with limiting tangent    Saddle point  Two incoming trajectories, two outgoing trajectories; all others bypass    Center  is enclosed by infinitely many closed (repeating) trajectories    Spiral point  Trajectories spiral inwards or outwards from    "
},
{
  "id": "example-stability-equilibrium-solution",
  "level": "2",
  "url": "section-phase-plane-criteria-for-critical-points-stability.html#example-stability-equilibrium-solution",
  "type": "Example",
  "number": "4.3.3",
  "title": "Classifying a critical point using a phase portrait.",
  "body": " Classifying a critical point using a phase portrait   Using a phase portrait, determine the type of critical point that is for the matrix ODE where .    This system produces the following phase portrait:     As seen above, every (nonzero) trajectory will spiral outward from as , so is a spiral point of this system. To see why, we only need to look at the eigenvalues of , which we find to be . This means that the general solution of must look like .  The real part of the eigenvalues leads to the growth term of appearing in the solution, which causes the trajectories to diverge as . The imaginary part of the eigenvalues leads to the oscillating terms of appearing in the solution, which gives the trajectories their spiral motion.   "
},
{
  "id": "example-systems-odes-classifying-trajectories-algebraically",
  "level": "2",
  "url": "section-phase-plane-criteria-for-critical-points-stability.html#example-systems-odes-classifying-trajectories-algebraically",
  "type": "Example",
  "number": "4.3.4",
  "title": "Classifying trajectories algebraically.",
  "body": " Classifying trajectories algebraically   What kind of critical point is for the system where ?    We could sketch the phase portrait for this system, but we can also determine the behavior of the trajectories if we can find a relationship between and . To do so, we cross-multiply the system to get . So we can integrate this to get .  This is the equation of a circle of radius , and so every trajectory for this system will be a circle centered at . Hence is a center.   "
},
{
  "id": "table-eigenvalue-conditions-stability",
  "level": "2",
  "url": "section-phase-plane-criteria-for-critical-points-stability.html#table-eigenvalue-conditions-stability",
  "type": "Table",
  "number": "4.3.5",
  "title": "Eigenvalue conditions for stability",
  "body": " Eigenvalue conditions for stability    Name  Conditions on    Node  Real, same sign    Saddle point  Real, opposite sign    Center  Pure imaginary    Spiral point  Complex, not pure imaginary    "
},
{
  "id": "subsection-eigenvalue-criteria-for-stability-5",
  "level": "2",
  "url": "section-phase-plane-criteria-for-critical-points-stability.html#subsection-eigenvalue-criteria-for-stability-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stable unstable stable and attractive asymptotically stable "
},
{
  "id": "example-systems-odes-eigenvalue-conditions-for-asymptotically-stable-critical-points",
  "level": "2",
  "url": "section-phase-plane-criteria-for-critical-points-stability.html#example-systems-odes-eigenvalue-conditions-for-asymptotically-stable-critical-points",
  "type": "Example",
  "number": "4.3.6",
  "title": "Eigenvalue conditions for asymptotic stability.",
  "body": " Eigenvalue conditions for asymptotic stability   Let denote a matrix ODE where is a constant matrix. What conditions on the eigenvalues of will give an asymptotically stable critical point at ?    Let denote a nonzero solution of the matrix ODE (and therefore a trajectory). Then in order for to be asymptotically stable, we need as . Let denote the eigenvalues of . Then will have the form .  The previous paragraph shows that must go to as if either or if each exponential goes to as . Since we assume , this means we need for as . This implies that the real part of each eigenvalue must be negative, because the real part of each eigenvalue is what determines the growth of : if , then . So is asymptotically stable if the real parts of both eigenvalues are negative.   "
},
{
  "id": "example-systems-odes-critical-point-tank-system",
  "level": "2",
  "url": "section-phase-plane-criteria-for-critical-points-stability.html#example-systems-odes-critical-point-tank-system",
  "type": "Example",
  "number": "4.3.7",
  "title": "Long term behavior of a system of interconnected tanks.",
  "body": " Long term behavior of a system of interconnected tanks   Two tanks and containing  200   each of a water-salt mixture are set up as follows:   Tank 1: Pure water flows in at  12    and solution from Tank 2 flows in at  4    ; solution also flows out of Tank 1 and into Tank 2 at  16    .    Solution from Tank 1 flows in at  16    ; solution flows out of Tank 2 and into Tank 1 at  4    , and solution is emptied from Tank 2 at an addition rate of  12       Will the salt eventually empty from both tanks?    Let denote the amount of salt (in pounds) in Tank 1 at time (in minutes), and let do the same for Tank 2. Then . This system is equivalent to the matrix ODE where . We need to determine the long-term behavior of solutions of this ODE, which is itself determined by the eigenvalues of .  The eigenvalues of are . Since both eigenvalues have negative real part, it follows that is an asymptotically stable critical point of . Therefore every trajectory as . So no matter how much salt is initially in the tanks, the amount of salt will always go to .   "
},
{
  "id": "section-nonlinear-systems",
  "level": "1",
  "url": "section-nonlinear-systems.html",
  "type": "Section",
  "number": "4.4",
  "title": "Nonlinear systems",
  "body": " Nonlinear systems   Now we apply phase plane methods to study nonlinear autonomous systems , which for systems involving two ODEs take the form . where .    Autonomous just means we can write the system without explicitly referring to the independent variable .   We can also write such a system as a vector equation: . although not as a matrix ODE (if the functions are nonlinear).  Just as in the previous sections, the phase plane is still the -plane, trajectories are still the solutions of (represented as curves in the phase plane), and the phase portrait of is the set of all trajectories in the phase plane.  We call a point in the phase plane a critical point of if . In other words, is a critical point of if . Just as before, critical points represent solutions of the system that are in equilibrium.   The pendulum equation   Express the pendulum equation  , where represents the angular displacement of a pendulum from the vertical, as a nonlinear system and then find its critical points.    First, we have to rewrite the pendulum ODE as a first order system. We can do this without too much trouble as follows: set . Then the ODE turns into the system , which we can also write as using .  Now we need to find the critical points in the -plane that make . This requires and for , and so the critical points of this system are all points of the form .      Classification of critical points and linearization  Critical points of systems are important because they can represent long-term behavior of a system. For example, if we have a first-order system representing the population of two species, and it turns out the the origin is asymptotically stable, then this suggests that both species could be driven to extinction. So we want to classify critical points for nonlinear systems in addition to what we have already for linear systems; unfortunately, nonlinear systems are often difficult, if not outright impossible, to solve exactly.  Thankfully, in many cases we can approximate a nonlinear system with critical points by a suitably chosen linear system at each critical point ; we call such a system the linearization at .   The Jacobian of a nonlinear system  Jacobian      Jacobian of     Let . The Jacobian of is the matrix given by .   If is understood from context, we often write instead of for the Jacobian.     The Jacobian is important since it allows us to linearize a nonlinear system. More precisely, the linearization of at the point is the linear system , where    Linearizing the pendulum system   Find the linearization of the pendulum system at the critical point .    For this system, we have and . The Jacobian is then given by . So to get the linearization we need to set .    The linearization of a nonlinear system isn't just useful for approximating the nonlinear system. It's also incredibly useful for classifying the critical points of a nonlinear system; for the most part, the eigenvalues of the matrix from the linearization also classify the critical points of the system .   Classifying critical points using linearization   Find and classify the critical points of the nonlinear system .   This example taken from here.      The critical points occur at intersections between the nullclines and . The equations of the nullclines for are , while the equation of the nullcline is . Now we graph the nullclines (and the phase portrait):     The nullclines for and intersect in three places. Hence, there are three critical points for this system: and .  To determine the behavior of solutions at these critical points, we'll find the Jacobian at each point. First, we have . At , we get . The eigenvalues are and , meaning that this critical point is a saddle point. This is illustrated in the phase portrait below.     At we get which has eigenvalues . Hence should be a spiral point.     Finally, at we get , which has eigenvalues . Hence is an asymptotically stable node.       Linearization works well to classify the behavior of systems at certain types of critical points. A critical point of a system is hyperbolic if the Jacobian has eigenvalues with nonzero real part. Unfortunately, linearization is not guaranteed to give an accurate description of the behavior of non-hyperbolic critical points.   The Lotka-Volterra population model   Predator-prey populations can be modeled using the Lotka-Volterra model . Let denote the population of a prey species at time and let denote the population of a predator species at time . Then the Lotka-Volterra model says that , where . Find and classify the critical points of this system.    The critical points are the points that satisfy the equations Equivalently, we need This has solutions and , which shows that the critical points are and .  To classify the critical points of this system we will linearize the system. The Jacobian of is . Now we will examine the Jacobian at each critical point.  At , we get , which has eigenvalues which indicate a saddle point. Since these eigenvalues have nonzero real part, the origin is a hyperbolic critical point of the system and so we know that it also behaves as a saddle point in the original system. In particular, there exist trajectories heading into the origin, so it's possible for both species to go extinct in this model.  Now we'll classify the second critical point . The Jacobian at this point gives us the matrix . This matrix has characteristic equation , and so has eigenvalues . Since the eigenvalues are pure imaginary, this suggests that is a center, which is indeed the case. In particular, trajectories near this critical point must be periodic . Unfortunately we can't quite justify this conclusion. This is because both eigenvalues of the Jacobian at this critical point have zero real part, which means that this critical point is not hyperbolic and so the behavior of the linearization is not guaranteed to match the behavior of the original system at this critical point. That said, a more detailed analysis (or simply a sketch of the phase portrait) does indeed confirm that is a center of the original system.     "
},
{
  "id": "section-nonlinear-systems-2-1",
  "level": "2",
  "url": "section-nonlinear-systems.html#section-nonlinear-systems-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonlinear autonomous systems "
},
{
  "id": "section-nonlinear-systems-2-4",
  "level": "2",
  "url": "section-nonlinear-systems.html#section-nonlinear-systems-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "phase plane trajectories phase portrait "
},
{
  "id": "section-nonlinear-systems-2-5",
  "level": "2",
  "url": "section-nonlinear-systems.html#section-nonlinear-systems-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "critical point "
},
{
  "id": "example-systems-odes-pendulum-system",
  "level": "2",
  "url": "section-nonlinear-systems.html#example-systems-odes-pendulum-system",
  "type": "Example",
  "number": "4.4.1",
  "title": "The pendulum equation.",
  "body": " The pendulum equation   Express the pendulum equation  , where represents the angular displacement of a pendulum from the vertical, as a nonlinear system and then find its critical points.    First, we have to rewrite the pendulum ODE as a first order system. We can do this without too much trouble as follows: set . Then the ODE turns into the system , which we can also write as using .  Now we need to find the critical points in the -plane that make . This requires and for , and so the critical points of this system are all points of the form .   "
},
{
  "id": "subsection-classification-of-critical-points-and-linearization-3",
  "level": "2",
  "url": "section-nonlinear-systems.html#subsection-classification-of-critical-points-and-linearization-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearization "
},
{
  "id": "definition-the-jacobian-of-a-nonlinear-system",
  "level": "2",
  "url": "section-nonlinear-systems.html#definition-the-jacobian-of-a-nonlinear-system",
  "type": "Definition",
  "number": "4.4.2",
  "title": "The Jacobian of a nonlinear system.",
  "body": " The Jacobian of a nonlinear system  Jacobian      Jacobian of     Let . The Jacobian of is the matrix given by .   If is understood from context, we often write instead of for the Jacobian.    "
},
{
  "id": "subsection-classification-of-critical-points-and-linearization-5",
  "level": "2",
  "url": "section-nonlinear-systems.html#subsection-classification-of-critical-points-and-linearization-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearization "
},
{
  "id": "example-systems-odes-linearize-pendulum-system",
  "level": "2",
  "url": "section-nonlinear-systems.html#example-systems-odes-linearize-pendulum-system",
  "type": "Example",
  "number": "4.4.3",
  "title": "Linearizing the pendulum system.",
  "body": " Linearizing the pendulum system   Find the linearization of the pendulum system at the critical point .    For this system, we have and . The Jacobian is then given by . So to get the linearization we need to set .   "
},
{
  "id": "example-systems-odes-classify-critical-points-linearization",
  "level": "2",
  "url": "section-nonlinear-systems.html#example-systems-odes-classify-critical-points-linearization",
  "type": "Example",
  "number": "4.4.4",
  "title": "Classifying critical points using linearization.",
  "body": " Classifying critical points using linearization   Find and classify the critical points of the nonlinear system .   This example taken from here.      The critical points occur at intersections between the nullclines and . The equations of the nullclines for are , while the equation of the nullcline is . Now we graph the nullclines (and the phase portrait):     The nullclines for and intersect in three places. Hence, there are three critical points for this system: and .  To determine the behavior of solutions at these critical points, we'll find the Jacobian at each point. First, we have . At , we get . The eigenvalues are and , meaning that this critical point is a saddle point. This is illustrated in the phase portrait below.     At we get which has eigenvalues . Hence should be a spiral point.     Finally, at we get , which has eigenvalues . Hence is an asymptotically stable node.      "
},
{
  "id": "subsection-classification-of-critical-points-and-linearization-9",
  "level": "2",
  "url": "section-nonlinear-systems.html#subsection-classification-of-critical-points-and-linearization-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic "
},
{
  "id": "example-systems-odes-lotka-volterra",
  "level": "2",
  "url": "section-nonlinear-systems.html#example-systems-odes-lotka-volterra",
  "type": "Example",
  "number": "4.4.5",
  "title": "The Lotka-Volterra population model.",
  "body": " The Lotka-Volterra population model   Predator-prey populations can be modeled using the Lotka-Volterra model . Let denote the population of a prey species at time and let denote the population of a predator species at time . Then the Lotka-Volterra model says that , where . Find and classify the critical points of this system.    The critical points are the points that satisfy the equations Equivalently, we need This has solutions and , which shows that the critical points are and .  To classify the critical points of this system we will linearize the system. The Jacobian of is . Now we will examine the Jacobian at each critical point.  At , we get , which has eigenvalues which indicate a saddle point. Since these eigenvalues have nonzero real part, the origin is a hyperbolic critical point of the system and so we know that it also behaves as a saddle point in the original system. In particular, there exist trajectories heading into the origin, so it's possible for both species to go extinct in this model.  Now we'll classify the second critical point . The Jacobian at this point gives us the matrix . This matrix has characteristic equation , and so has eigenvalues . Since the eigenvalues are pure imaginary, this suggests that is a center, which is indeed the case. In particular, trajectories near this critical point must be periodic . Unfortunately we can't quite justify this conclusion. This is because both eigenvalues of the Jacobian at this critical point have zero real part, which means that this critical point is not hyperbolic and so the behavior of the linearization is not guaranteed to match the behavior of the original system at this critical point. That said, a more detailed analysis (or simply a sketch of the phase portrait) does indeed confirm that is a center of the original system.   "
},
{
  "id": "sec-sage-and-octave-for-systems-of-odes",
  "level": "1",
  "url": "sec-sage-and-octave-for-systems-of-odes.html",
  "type": "Section",
  "number": "4.5",
  "title": "Sage and Octave for systems of ODEs",
  "body": " Sage and Octave for systems of ODEs   The purpose of this section is to discuss useful code in both Sage and Octave for working with systems of ODEs. Generally, algebraic work is best handled with Sage while numerical computations might be easier in Octave. Octave is designed as an open-source alternative to MATLAB, so familiarity with one programming language leads to familiarity with the other.    Vectors and matrices  The fundamental objects in this chapter are vectors and matrices. Both Sage and Octave are designed to handle these quantities, though Octave is better suited to dealing with purely numerical examples. In Sage, we can create vectors using the vector command, which takes as input a list of (possibly symbolic) values.   You should note that the output produced by the vector command in Sage is not considered to be either a row vector or a column vector. If you specifically want to represent a row or column vector, you can use the Matrix command which we will see soon or the row() and column() methods:   In Octave, we can simply use brackets [] to define vectors (and matrices). Entries of a row vector must be separated by commas or spaces, while entries of a column vector must be separated by semicolons.   To enter matrices in Sage, we can use the Matrix command. The input to this command is typically a list of lists, each representing a row of the matrix. By providing two optional arguments for the number of rows and number of columns, Sage can also reshape a list into an appropriate matrix.   Creating a matrix is a little bit easier to do in Octave, as Octave supports the bracket notation for vectors in the creation of matrices as well. Octave also inludes a reshape command.     Solving matrix ODEs  For solving matrix ODEs exactly, we can use Sage's desolve_system command. The code below shows how to solve . First, we define our unknown functions in terms of the variable . Then we define each equation in our system. Finally, we use desolve_system to produce the solution.   Solving a corresponding IVP, say with , can be done by providing the ics argument to desolve_system .   Linear systems can also be solved using the eigenvector and eigenvalue approach developed in as done in the original solution in . In Octave, the required code is the following.   Each column of the matrix is an eigenvector of with corresponding eigenvalue given in the matrix . The solution of the system can be given as . Solving for initial conditions requires solving the matrix equation . Octave makes this simple by providing the forward slash operator \\ .   We can make use of Octave's concept of array operations to make defining a little smoother.     Phase portraits  To visualize solutions of first-order systems, we can plot phase portraits in Sage using plot_vector_field :   To better visualize how the trajectories of the system move, one can also use streamline_plot :   Specific trajectories (i.e., those satisfying certain initial conditions) can be plotted by providing a list of points with the optional start_points argument:    "
},
{
  "id": "section-power-series-method",
  "level": "1",
  "url": "section-power-series-method.html",
  "type": "Section",
  "number": "5.1",
  "title": "Power Series Method",
  "body": " Power Series Method   Since power series form the basis of our solution strategy in this chapter, we begin by reviewing some important concepts related to power series and their convergence.    Review of Power Series  In calculus, it's important to know how to differentiate and integrate functions. For some functions (say, ) it can be very straightforward, but for others (such as ) it can be impossible.   At least, it can be impossible to integrate certain functions in terms of the everyday , or elementary functions that we're used to.   Power series were introduced in calculus to allow us to write complicated functions in terms of simpler functions . In particular, our goal is to write in the form where the coefficients are all constants.   Power series  power series   A power series (centered at ) is a series (that is, an infinite sum) of the form . The power series is said to converge on some interval if the sum exists for each in .     A power series doesn't have to start at , but it may not contain any negative powers of .   The question, now, is to determine the values of the coefficients to make true. If we look at the equation we see that we can solve for very easily. All that we need to do is to set in to make all of the other terms disappear: .  We can use a similar approach to solve for by plugging in , but we need to get rid of the power of attached to it. This is done by taking the derivative of and then setting : . The same trick works for : so . Let's try this one more time to get : and so .  In general, to get the coefficient of in the power series of , we have the following equation: .   Power series of   Find a power series for the exponential function .    Any power series for looks like , where . Since is its own derivative, for all choices of . So and the power series for is . It turns out the equals its power series for all values of .    The above power series was written in terms of powers of , but this doesn't have to be the case. We can also write power series in terms of powers of , where is some constant. A power series of the form is said to be centered at . For such a series, the formula for the is given by .   Power series of at   Find the power series for centered at .    A power series centered at will look like where . To find these values, we need to compute the derivatives of and evaluate them at : . So the power series centered at is . Just as with , is equal to its power series everywhere.    The following power series are used quite often: Viewing a function as a power series can be extremely beneficial; if you have a power series expression for some function, it (usually) makes the related calculus operations such as differentiation and integration trivial to perform.   Integrating a series   Find .    We can't integrate using elementary functions but this is straightforward to integrate using power series: .   We can also write the integral of in terms of the error function : .     Calculations involving power series are only valid where the series converges. The following theorem can be used to determine when a power series converges.   power series radius of convergence   Given the power series , define the number by the limit . Suppose the limit exists or is infinite. Then is the radius of converengence of the series: if then the series converges for and diverges for . If then the series converges only at .   If then convergence at the endpoints of the interval of convergence is not guaranteed and must be checked separately using some appropriate convergence test.     It must be noted that convergence of the power series of some function does not guarantee that can be represented by its power series. For instance, consider the function given by . This has the power series representation at since for all integers with . However, except at , so this power series representation is not very useful for representing despite the fact that it converges for all .  In general, if has the power series representation  and if this series converges to for all in some interval centered at , then we say that the function is analytic at . The previous paragraph shows that is not analytic at . Thankfully, most of the functions we'll consider are in fact analytic.    Solving Differential Equations with Power Series  We now turn to the main topic of this chapter: solving differential equations with power series. This power series method is quite general and can theoretically be used whenever the functions involved in the differential equation are analytic, but we will primarily consider second-order linear ODEs that are homogeneous and have polynomial coefficients.   Note that polynomials are automatically analytic since they're already power series. Hence a polynomial is its own power series representation.    Solving a first-order differential equation with series   Solve the ODE given by .    We could easily solve this using methods from , but we'll use power series instead to see how this method works. To start, we assume that the solution can be written as a power series: . See for the justification behind this step.  The next step is to plug the ansatz into the ODE. Since we get the equation .  We need to find the values of the coefficients ; we will do this by equating coefficients on both sides of . We want to write both series in terms of so that we can equate coefficients, so we need to shift the summation on the left: we replace with inside the sum and decrease the limit of summation to to get . Now we can equate coefficients: for , we have .  The equation is a recurrence relation for the coefficients . It describes the coefficients in terms of the previous ones, and can be used to determine explicitly what each looks like. To see how, we plug several values for into this recurrence relation to try to determine a pattern: and in general it appears that for each .   We can't use either or to find the initial constant . This must be given by an initial condition of some kind.   Now that we've determined the form of the coefficients , we can write down the solution : .    The power series method generally works as we utilized it in . In general, the power series method to solve ODEs consists of the following procedure:   Write .    Use the ODE to build a recurrence relation for the coefficients .    Find an explicit description of the coefficients.    Identify as the power series of some function.      Solving a first-order ODE with variable coefficients   Use power series to solve the ODE .    We will solve this using the steps listed above. First, assume . Now plug this guess for into the ODE to get .  As in we want to equate coefficients to build a recurrence relation, so we need to rewrite these sums so that the same power of appears on both sides. We do this by shifting the sums, but we need to remember to shift the limits of each sum as well:   Changing limits of summation    Sum  Index  Limit               So we get . Hence a recurrence relation for is which is valid for .  Since this two-step recurrence relation is only valid for , it places no restrictions on or . However, the original ODE was first-order! So we should only expect to have one arbitrary constant in our solution, which suggests that one of or must be zero. To determine which constant must vanish, we write out the first couple terms of the sums in and equate coefficients: . This tells us that . Again, we can't get this information from the recurrence relation!  Now we try to find an explicit formula for . Because this is a two-step recurrence, we will write out the coefficients in two columns, one for odd and one for even : . So it appears that for every .  Now we plug this into our power series for to get .    Let's now move on to an example where none of our previous methods are easily applicable. We will also demonstrate how the method applies to solving IVPs.   Power series method with an IVP   Let denote the solution of . Find up to the term and determine the values of and .    It can be shown that .    Now that we have an idea of how to solve differential equations using power series, it can be useful to know when this method is actually valid, i.e., when power series solutions exist. We will be particularly concerned with solutions of second-order linear ODEs of the form .   Existence of Series Solutions  power series existence of series solution   Consider the differential equation given by . If and are analytic at a point , then every solution of is also analytic at .    Points that satisfy the conditions in are also called ordinary points of .   A Legendre Equation   Show that has a series solution centered at and then find the solution up to the coefficient of .    First, note that the equation can be rewritten , so we are guaranteed a series solution centered at . Furthermore, this solution has radius of convergence at least .  To find the solution, we return to the original equation and substitute to get which becomes . After a little algebra, we get the recurrence relation . This recurrence is valid for .  Now we can use the recurrence to list the first several terms of the solution: In fact, .   In the last equation, has been substituted for .      "
},
{
  "id": "series-solution-definition-power-series-centered-at-0",
  "level": "2",
  "url": "section-power-series-method.html#series-solution-definition-power-series-centered-at-0",
  "type": "Definition",
  "number": "5.1.1",
  "title": "Power series.",
  "body": " Power series  power series   A power series (centered at ) is a series (that is, an infinite sum) of the form . The power series is said to converge on some interval if the sum exists for each in .   "
},
{
  "id": "example-series-exponential",
  "level": "2",
  "url": "section-power-series-method.html#example-series-exponential",
  "type": "Example",
  "number": "5.1.2",
  "title": "Power series of <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(e^x\\)<\/span>.",
  "body": " Power series of   Find a power series for the exponential function .    Any power series for looks like , where . Since is its own derivative, for all choices of . So and the power series for is . It turns out the equals its power series for all values of .   "
},
{
  "id": "subsection-review-of-power-series-11",
  "level": "2",
  "url": "section-power-series-method.html#subsection-review-of-power-series-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centered at "
},
{
  "id": "example-series-sin-pi-over-2",
  "level": "2",
  "url": "section-power-series-method.html#example-series-sin-pi-over-2",
  "type": "Example",
  "number": "5.1.3",
  "title": "Power series of <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\sin(t)\\)<\/span> at <span class=\"process-math\">\\(a = \\frac{\\pi}{2}\\)<\/span>.",
  "body": " Power series of at   Find the power series for centered at .    A power series centered at will look like where . To find these values, we need to compute the derivatives of and evaluate them at : . So the power series centered at is . Just as with , is equal to its power series everywhere.   "
},
{
  "id": "example-series-integral",
  "level": "2",
  "url": "section-power-series-method.html#example-series-integral",
  "type": "Example",
  "number": "5.1.4",
  "title": "Integrating a series.",
  "body": " Integrating a series   Find .    We can't integrate using elementary functions but this is straightforward to integrate using power series: .   We can also write the integral of in terms of the error function : .    "
},
{
  "id": "theorem-finding-radius-convergence",
  "level": "2",
  "url": "section-power-series-method.html#theorem-finding-radius-convergence",
  "type": "Theorem",
  "number": "5.1.5",
  "title": "",
  "body": " power series radius of convergence   Given the power series , define the number by the limit . Suppose the limit exists or is infinite. Then is the radius of converengence of the series: if then the series converges for and diverges for . If then the series converges only at .   If then convergence at the endpoints of the interval of convergence is not guaranteed and must be checked separately using some appropriate convergence test.    "
},
{
  "id": "subsection-review-of-power-series-18",
  "level": "2",
  "url": "section-power-series-method.html#subsection-review-of-power-series-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "analytic "
},
{
  "id": "example-series-solve-first-order-linear",
  "level": "2",
  "url": "section-power-series-method.html#example-series-solve-first-order-linear",
  "type": "Example",
  "number": "5.1.6",
  "title": "Solving a first-order differential equation with series.",
  "body": " Solving a first-order differential equation with series   Solve the ODE given by .    We could easily solve this using methods from , but we'll use power series instead to see how this method works. To start, we assume that the solution can be written as a power series: . See for the justification behind this step.  The next step is to plug the ansatz into the ODE. Since we get the equation .  We need to find the values of the coefficients ; we will do this by equating coefficients on both sides of . We want to write both series in terms of so that we can equate coefficients, so we need to shift the summation on the left: we replace with inside the sum and decrease the limit of summation to to get . Now we can equate coefficients: for , we have .  The equation is a recurrence relation for the coefficients . It describes the coefficients in terms of the previous ones, and can be used to determine explicitly what each looks like. To see how, we plug several values for into this recurrence relation to try to determine a pattern: and in general it appears that for each .   We can't use either or to find the initial constant . This must be given by an initial condition of some kind.   Now that we've determined the form of the coefficients , we can write down the solution : .   "
},
{
  "id": "example-series-solution-first-order-variable-coeffs",
  "level": "2",
  "url": "section-power-series-method.html#example-series-solution-first-order-variable-coeffs",
  "type": "Example",
  "number": "5.1.7",
  "title": "Solving a first-order ODE with variable coefficients.",
  "body": " Solving a first-order ODE with variable coefficients   Use power series to solve the ODE .    We will solve this using the steps listed above. First, assume . Now plug this guess for into the ODE to get .  As in we want to equate coefficients to build a recurrence relation, so we need to rewrite these sums so that the same power of appears on both sides. We do this by shifting the sums, but we need to remember to shift the limits of each sum as well:   Changing limits of summation    Sum  Index  Limit               So we get . Hence a recurrence relation for is which is valid for .  Since this two-step recurrence relation is only valid for , it places no restrictions on or . However, the original ODE was first-order! So we should only expect to have one arbitrary constant in our solution, which suggests that one of or must be zero. To determine which constant must vanish, we write out the first couple terms of the sums in and equate coefficients: . This tells us that . Again, we can't get this information from the recurrence relation!  Now we try to find an explicit formula for . Because this is a two-step recurrence, we will write out the coefficients in two columns, one for odd and one for even : . So it appears that for every .  Now we plug this into our power series for to get .   "
},
{
  "id": "example-power-series-method-with-an-ivp",
  "level": "2",
  "url": "section-power-series-method.html#example-power-series-method-with-an-ivp",
  "type": "Example",
  "number": "5.1.9",
  "title": "Power series method with an IVP.",
  "body": " Power series method with an IVP   Let denote the solution of . Find up to the term and determine the values of and .    It can be shown that .   "
},
{
  "id": "theorem-existence-of-series-solutions",
  "level": "2",
  "url": "section-power-series-method.html#theorem-existence-of-series-solutions",
  "type": "Theorem",
  "number": "5.1.10",
  "title": "Existence of Series Solutions.",
  "body": " Existence of Series Solutions  power series existence of series solution   Consider the differential equation given by . If and are analytic at a point , then every solution of is also analytic at .   "
},
{
  "id": "subsection-solving-differential-equations-with-power-series-11",
  "level": "2",
  "url": "section-power-series-method.html#subsection-solving-differential-equations-with-power-series-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordinary points "
},
{
  "id": "example-a-legendre-equation",
  "level": "2",
  "url": "section-power-series-method.html#example-a-legendre-equation",
  "type": "Example",
  "number": "5.1.11",
  "title": "A Legendre Equation.",
  "body": " A Legendre Equation   Show that has a series solution centered at and then find the solution up to the coefficient of .    First, note that the equation can be rewritten , so we are guaranteed a series solution centered at . Furthermore, this solution has radius of convergence at least .  To find the solution, we return to the original equation and substitute to get which becomes . After a little algebra, we get the recurrence relation . This recurrence is valid for .  Now we can use the recurrence to list the first several terms of the solution: In fact, .   In the last equation, has been substituted for .    "
},
{
  "id": "section-legendre-s-equation-and-legendre-polynomials",
  "level": "1",
  "url": "section-legendre-s-equation-and-legendre-polynomials.html",
  "type": "Section",
  "number": "5.2",
  "title": "Legendre’s Equation and Legendre Polynomials",
  "body": " Legendre's Equation and Legendre Polynomials  Legendre's Equation   An important differential equation in applications is the Legendre equation given by . Our first example of this equation (with ) was examined in . By this example, we see that has a series solution centered at with radius of convergence at least . Therefore the power series method is appropriate.    Solving the Legendre Equation  We'll proceed as we did in , altering the last sum as necessary to get which gives (after a bit of algebra, once again) .  This recurrence is valid for , and allows us to write out the solution in terms of the parameter and the arbitrary constants and : where .  Note that and form a basis of solutions ( ) of the Legendre equation, which means that must also be the general solution.    Legendre Polynomials  Our solution of simplifies greatly if happens to be an integer. In particular, if is a nonnegative integer then . If is even then the solution given in becomes a polynomial: . Likewise, if is odd then given in becomes a polynomial instead: .  By choosing and judiciously, we can guarantee that the polynomials (if is even) or (if is odd) are precisely equal to at . Doing so gives us the Legendre polynomials  , defined more precisely in : .  These polynomials satisfy several nice properties, but one of the most important characteristics they have is that forms an orthogonal set of polynomials on the interval . This means that if . It can also be shown that if .  This property allows us to express any polynomial as a finite sum of Legendre polynomials in a computationally efficient manner. Furthermore, if we allow infinite series then we can use Legendre polynomials to express any continuous function defined on . In particular, if is continuous on then where .  This is demonstrated in for the function . This approximation is particularly interesting since we've already seen that is not analytic. Hence has no power series representation at but it still has a Legendre series.   Legendre series approximation for    A plot containing the function and the corresponding Legendre series up to the fourth-order term.       Note that we don't need to include the odd Legendre polynomials in . Since is an even function , its integral against any odd function over must be . Hence the odd degree polynomials contribute nothing to the corresponding Legendre series.   For actually computing Legendre polynomials, instead of using we often use Rodrigues' formula  or Bonnet's recurrence  . Either recurrence is simple to program into a CAS, as seen in the Sage cell below:    "
},
{
  "id": "section-legendre-s-equation-and-legendre-polynomials-3-1",
  "level": "2",
  "url": "section-legendre-s-equation-and-legendre-polynomials.html#section-legendre-s-equation-and-legendre-polynomials-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Legendre equation "
},
{
  "id": "subsection-legendre-polynomials-3",
  "level": "2",
  "url": "section-legendre-s-equation-and-legendre-polynomials.html#subsection-legendre-polynomials-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Legendre polynomials "
},
{
  "id": "figure-series-solutions-legendre-series-approx",
  "level": "2",
  "url": "section-legendre-s-equation-and-legendre-polynomials.html#figure-series-solutions-legendre-series-approx",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " Legendre series approximation for    A plot containing the function and the corresponding Legendre series up to the fourth-order term.     "
},
{
  "id": "section-frobenius-method",
  "level": "1",
  "url": "section-frobenius-method.html",
  "type": "Section",
  "number": "5.3",
  "title": "The Method of Frobenius",
  "body": " The Method of Frobenius  Frobenius' Method   The power series method is guaranteed to work if the coefficient functions in are analytic. However, there are important examples of ODEs where this property fails (see , which is used in the study of vibrating membranes). To solve ODEs where analyticity fails, we can sometimes use the method of Frobenius .  The main idea behind this method is to replace the ansatz with the modified guess . The value here is chosen in such a way so as to guarantee a solution of the ODE in of the form given in . However, the value of used might not be a nonnegative whole number and could produce negative or fractional powers of in the solution. Therefore the resulting solution is typically not a power series.    Ordinary Points and Singular Points  Recall that a homogeneous, linear second order ODE has the form . We can rewrite this in the form . As we saw at the end of , the efficacy of the power series method depends on the behavior of and at the point we're centering our series solution at.   Ordinary Points and Singular Points  ordinary and singular points   A point is called an ordinary point of the homogeneous form of if and both have power series expansions at . If is not an ordinary point we call it a singular point .    Ordinary points of an ODE are precisely the points where the power series method is guaranteed to produce a valid solution.   Existence of Series Solution  Existence of Series Solutions   Suppose that is an ordinary point of the differential equation . Then the ODE has two linearly independent solutions of the form . The radius of convergence of the resulting solution is at least as large as the distance from to the nearest singular point of the ODE.      Show that the ODE has a power series solution and estimate its radius of convergence. Then solve the ODE.    The first thing we will do is make sure that the ODE actually has a power series solution at . To do this, we need to show that is an ordinary point of the ODE, which requires finding the appropriate and from . If we divide through the ODE by we obtain , and so .  Since both of these functions are analytic at (i.e., they have power series representations centered at ), it follows that is an ordinary point of the ODE. Therefore the ODE has a power series solution at . Since and both have singular points at , it follows that the radius of convergence of the power series solution is at least .   Here, we're using the formula The radius of convergence can also be visualized in the complex plane as marking out a circle of radius centered at the origin.   We can now find our solution just as we did in , we assume the ODE has a series solution of the form (which is justified by the above!). We want to return to the original form of the ODE to solve it; if we didn't do so, we would need to expand and using their own power series, and this would greatly complicate the algebra. So we will plug into and then equate coefficients to get a recurrence relation for . This can be done with a little help from Sage:   After equating coefficients, our computations with Sage suggest that , or more simply . This can of course be verified algebraically as we've done several times already, but we'll trust Sage for now.  The next step now that we have a recurrence relation is to find a pattern for the coefficients. Since this is a two-step relation, we'll set up two columns: one column for even and one column for odd : . So it appears that .  Therefore the general solution of the ODE is       Solutions at Singular Points and Indicial Equations  We've seen several examples showing the effectiveness of the power series method at ordinary points, but the situation becomes more complicated at singular points. At these points, we may not be guaranteed a power series solution.    Attempt to solve the ODE .    We start, just as we did before, by assuming the solution is a power series: . We will once again use Sage to handle the algebra for us:   Now let's start equating coefficients. First, we immediately get that . However, this forces since . And this in turn forces , and so on.  Therefore our series solution is just . This is indeed a solution of the original ODE, but it's not a general solution. Our work in this example shows that the general solution of cannot be written as a power series.    The reason we couldn't find a solution of the form was because is a singular point of the ODE. If we divide through by we get and it's obvious that the coefficients have a divide by problem at .  Our goal is to find a way of dealing with situations where is a singular point of an ODE of the form . We know, in general, that we won't be able to find a power series solution ; intuitively, a power series solution is too nice to be a solution of this ODE if is a singular point.  To fix this, we change our guess for to or, equivalently, . Here, can be any number (real or complex!), so in general the solution produced by this method will not be a power series . We lose a little bit by no longer assuming that is a power series, but this expression may be flexible enough to lead to a solution of the ODE at a singular point.   Recall that a power series, by definition, has only nonnegative whole number powers of .   Our goal now is to find the value of based on the ODE and the coefficient functions and . To do so, we will plug into the ODE and attempt to get some conditions on . First, note that so when we plug these into the ODE we get .  Now combine everything into one sum to get . So for this equation to be true, we need to have for every and every . Since we are trying to find , we'll pick values for and . In particular, if we assume that and exist at we can pick to get (we can assume that ). This equation tells us how to find .   Indicial Equation  indicial equation   Suppose that is a singular point of the ODE in but that and have well-defined power series at (i.e., and make sense). Then is called the indicial equation of .    What we've shown is that if is a solution of , then must be a root of the indicial equation. In fact, we can say more.   Method of Frobenius  Method of Frobenius   Consider the ODE . Suppose that are (real) roots of the indicial equation . Then the following statements are true:   There is a solution of the ODE of the form .    If is not equal to an integer, then there exists a second linearly independent solution of the form .    If , there exists a second linearly independent solution of the form .    If is a nonzero integer, there exists a second linearly independent solution of the form .        Using the Method of Frobenius   Find a series solution centered at of the ODE .    If we divide through the ODE by we get a divide-by-zero problem at , so is a singular point. Therefore we will use to determine the appropriate form of a series solution for this ODE.  We have , so and both have power series representations centered at (namely, themselves!). This means we can use the method of Frobenius to find a solution of the form .  The first step is to set up and solve the indicial equation, which in this case is given by . We solve this algebraically for to get the roots and . Since is an integer, we are guaranteed a solution based on and a second solution based on and the natural logarithm.  To continue, we make the guess . Now we plug this into the ODE to get or just . which simplifies to . So the recurrence relation the coefficients need to satisfy is .  The recurrence relation will tell us nothing about and , so to see if there are any restrictions on these coefficients we separate the and terms from the summation to get . This equation places no restrictions at all on , but it does force since we need the term to disappear to make this equation true. This tells us that we can ignore the coefficients with odd index, since they will all disappear.  Now we'll try to find a pattern in the remaining coefficients: and in general .  Therefore a solution (but not the general solution!) of this ODE is given by , which is actually just .  Technically, this isn't the general solution of the ODE as we still need a second linearly independent solution to construct it. However, we know from that the second solution must be of the form We can find appropriate values for and the coefficients by plugging this guess into the ODE and proceeding much as we did above. We will once again let Sage do the heavy lifting:   Plugging this into the original ODE (and using a computer algebra system such as Sage), we get after truncating the expansion up to the term.  This allows us (theoretically) to solve for and the coefficients . In fact, we get and so . Since the second series corresponds to a multiple of , we can safely set and get . Therefore the general solution of the ODE is .     "
},
{
  "id": "definition-ordinary-points-and-singular-points",
  "level": "2",
  "url": "section-frobenius-method.html#definition-ordinary-points-and-singular-points",
  "type": "Definition",
  "number": "5.3.1",
  "title": "Ordinary Points and Singular Points.",
  "body": " Ordinary Points and Singular Points  ordinary and singular points   A point is called an ordinary point of the homogeneous form of if and both have power series expansions at . If is not an ordinary point we call it a singular point .   "
},
{
  "id": "theorem-existence-of-series-solution",
  "level": "2",
  "url": "section-frobenius-method.html#theorem-existence-of-series-solution",
  "type": "Theorem",
  "number": "5.3.2",
  "title": "Existence of Series Solution.",
  "body": " Existence of Series Solution  Existence of Series Solutions   Suppose that is an ordinary point of the differential equation . Then the ODE has two linearly independent solutions of the form . The radius of convergence of the resulting solution is at least as large as the distance from to the nearest singular point of the ODE.   "
},
{
  "id": "example-frobenius-estimate-radius-series-solution",
  "level": "2",
  "url": "section-frobenius-method.html#example-frobenius-estimate-radius-series-solution",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  Show that the ODE has a power series solution and estimate its radius of convergence. Then solve the ODE.    The first thing we will do is make sure that the ODE actually has a power series solution at . To do this, we need to show that is an ordinary point of the ODE, which requires finding the appropriate and from . If we divide through the ODE by we obtain , and so .  Since both of these functions are analytic at (i.e., they have power series representations centered at ), it follows that is an ordinary point of the ODE. Therefore the ODE has a power series solution at . Since and both have singular points at , it follows that the radius of convergence of the power series solution is at least .   Here, we're using the formula The radius of convergence can also be visualized in the complex plane as marking out a circle of radius centered at the origin.   We can now find our solution just as we did in , we assume the ODE has a series solution of the form (which is justified by the above!). We want to return to the original form of the ODE to solve it; if we didn't do so, we would need to expand and using their own power series, and this would greatly complicate the algebra. So we will plug into and then equate coefficients to get a recurrence relation for . This can be done with a little help from Sage:   After equating coefficients, our computations with Sage suggest that , or more simply . This can of course be verified algebraically as we've done several times already, but we'll trust Sage for now.  The next step now that we have a recurrence relation is to find a pattern for the coefficients. Since this is a two-step relation, we'll set up two columns: one column for even and one column for odd : . So it appears that .  Therefore the general solution of the ODE is    "
},
{
  "id": "example-frobenius-no-power-series-solution",
  "level": "2",
  "url": "section-frobenius-method.html#example-frobenius-no-power-series-solution",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": "  Attempt to solve the ODE .    We start, just as we did before, by assuming the solution is a power series: . We will once again use Sage to handle the algebra for us:   Now let's start equating coefficients. First, we immediately get that . However, this forces since . And this in turn forces , and so on.  Therefore our series solution is just . This is indeed a solution of the original ODE, but it's not a general solution. Our work in this example shows that the general solution of cannot be written as a power series.   "
},
{
  "id": "definition-indicial-equation",
  "level": "2",
  "url": "section-frobenius-method.html#definition-indicial-equation",
  "type": "Definition",
  "number": "5.3.5",
  "title": "Indicial Equation.",
  "body": " Indicial Equation  indicial equation   Suppose that is a singular point of the ODE in but that and have well-defined power series at (i.e., and make sense). Then is called the indicial equation of .   "
},
{
  "id": "theorem-method-of-frobenius",
  "level": "2",
  "url": "section-frobenius-method.html#theorem-method-of-frobenius",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "Method of Frobenius.",
  "body": " Method of Frobenius  Method of Frobenius   Consider the ODE . Suppose that are (real) roots of the indicial equation . Then the following statements are true:   There is a solution of the ODE of the form .    If is not equal to an integer, then there exists a second linearly independent solution of the form .    If , there exists a second linearly independent solution of the form .    If is a nonzero integer, there exists a second linearly independent solution of the form .      "
},
{
  "id": "example-using-method-of-frobenius",
  "level": "2",
  "url": "section-frobenius-method.html#example-using-method-of-frobenius",
  "type": "Example",
  "number": "5.3.7",
  "title": "Using the Method of Frobenius.",
  "body": " Using the Method of Frobenius   Find a series solution centered at of the ODE .    If we divide through the ODE by we get a divide-by-zero problem at , so is a singular point. Therefore we will use to determine the appropriate form of a series solution for this ODE.  We have , so and both have power series representations centered at (namely, themselves!). This means we can use the method of Frobenius to find a solution of the form .  The first step is to set up and solve the indicial equation, which in this case is given by . We solve this algebraically for to get the roots and . Since is an integer, we are guaranteed a solution based on and a second solution based on and the natural logarithm.  To continue, we make the guess . Now we plug this into the ODE to get or just . which simplifies to . So the recurrence relation the coefficients need to satisfy is .  The recurrence relation will tell us nothing about and , so to see if there are any restrictions on these coefficients we separate the and terms from the summation to get . This equation places no restrictions at all on , but it does force since we need the term to disappear to make this equation true. This tells us that we can ignore the coefficients with odd index, since they will all disappear.  Now we'll try to find a pattern in the remaining coefficients: and in general .  Therefore a solution (but not the general solution!) of this ODE is given by , which is actually just .  Technically, this isn't the general solution of the ODE as we still need a second linearly independent solution to construct it. However, we know from that the second solution must be of the form We can find appropriate values for and the coefficients by plugging this guess into the ODE and proceeding much as we did above. We will once again let Sage do the heavy lifting:   Plugging this into the original ODE (and using a computer algebra system such as Sage), we get after truncating the expansion up to the term.  This allows us (theoretically) to solve for and the coefficients . In fact, we get and so . Since the second series corresponds to a multiple of , we can safely set and get . Therefore the general solution of the ODE is .   "
},
{
  "id": "section-bessel-s-equation",
  "level": "1",
  "url": "section-bessel-s-equation.html",
  "type": "Section",
  "number": "5.4",
  "title": "Bessel’s Equation",
  "body": " Bessel's Equation   As with Legendre's Equation , another important differential equation in applications is Bessel's equation : , where . By , this equation has a series solution at of the form where is a solution of the indicial equation , or just . In particular, there we're guaranteed a series solution by setting , since this is the larger root. Note that is actually a Bessel equation with parameter .  Let . Then we can plug this into to obtain , which gives . Since this only gives us data about , we should go back to to see if we can say anything about or . In fact, we get . Hence our series solution only contains even-indexed coefficients. Rewriting the recurrence to reflect this, we get .    Bessel Functions for Integer  Now we consider what happens to solutions given by if is a nonnegative integer. To simplify matters (somewhat...), we add the restriction that . This allows us to write more simply as .     Bessel function of the first kind of order  The resulting series is known as the Bessel function of the first kind of order .   Finding and   Find the zeroth order and first order Bessel functions of the first kind.    Using , we get .    These functions are important enough that they are built-in to most computer algebra systems. In Sage, these functions are implemented as bessel_J(n, x) :   As we can see, these functions oscillate and tend towards . A useful (asymptotic) approximation is given by , as shown below.   Approximating a Bessel function         Bessel Functions of the First Kind for Nonnegative Order  Now we try to find a formula for assuming . To do so, we need to make sense of expressions like for noninteger . Thankfully, we can do so using the Gamma function .   Gamma Function  Gamma function    Gamma function    The Gamma function is the function given by .    An important property of the Gamma function is the following: . If we replace with an integer , we get . It turns out that we can replace in with , giving . Note that the asymptotic expansion in holds for noninteger as well.    General Solution of Bessel's Equation  Since is second-order, we need a second linearly independent solution in combination with to get the general solution. If is not an integer then we can find the second solution very quickly: . However, if is an integer then it turns out that , and so fails to be linearly independent from .  It turns out that a second, linearly independent solution is given as follows: .     Bessel function of the second kind of order  The functions defined in are called Bessel functions of the second kind . Sage implements these functions as well using the bessel_Y(n,x) command.   "
},
{
  "id": "section-bessel-s-equation-2-1",
  "level": "2",
  "url": "section-bessel-s-equation.html#section-bessel-s-equation-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bessel's equation "
},
{
  "id": "subsection-bessel-functions-for-integer--nu--3",
  "level": "2",
  "url": "section-bessel-s-equation.html#subsection-bessel-functions-for-integer--nu--3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bessel function of the first kind "
},
{
  "id": "example-finding-j_-0-m-and-j_-1-m-",
  "level": "2",
  "url": "section-bessel-s-equation.html#example-finding-j_-0-m-and-j_-1-m-",
  "type": "Example",
  "number": "5.4.1",
  "title": "Finding <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(J_{0}\\)<\/span> and <span class=\"process-math\">\\(J_{1}\\)<\/span>.",
  "body": " Finding and   Find the zeroth order and first order Bessel functions of the first kind.    Using , we get .   "
},
{
  "id": "figure-bessel-approximation-first-kind",
  "level": "2",
  "url": "section-bessel-s-equation.html#figure-bessel-approximation-first-kind",
  "type": "Figure",
  "number": "5.4.2",
  "title": "",
  "body": " Approximating a Bessel function      "
},
{
  "id": "definition-gamma-function",
  "level": "2",
  "url": "section-bessel-s-equation.html#definition-gamma-function",
  "type": "Definition",
  "number": "5.4.3",
  "title": "Gamma Function.",
  "body": " Gamma Function  Gamma function    Gamma function    The Gamma function is the function given by .   "
},
{
  "id": "subsection-general-solution-of-bessel-s-equation-4",
  "level": "2",
  "url": "section-bessel-s-equation.html#subsection-general-solution-of-bessel-s-equation-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bessel functions of the second kind "
},
{
  "id": "section-the-laplace-transform",
  "level": "1",
  "url": "section-the-laplace-transform.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Laplace Transform",
  "body": " The Laplace Transform   We start with an example motivating the need for the Laplace transform.    Motivating the Laplace transform   A mass of 1 is attached to a spring that is held 1 to the right of its equilibrium position by a force of 4 . Beginning at time , a machine is turned on and applies an external force of to the mass. At time the machine is turned off and the external force disappears. Let be the displacement of the mass at time . What is an ODE that models the motion of the mass?    We can set this model up as we did in . By Hooke's Law and Newton's Second Law, we have where is the external force at time . Since , and the motion of the mass satisfies the ODE .    For the above example we could try to solve the resulting equation by using techniques that we developed in . This approach requires finding the complementary solution (which isn't a problem) and then by finding the particular solution corresponding to . However, finding will not be possible using our previous methods since the function is not differentiable everywhere (nor continuous everywhere). The power series method will not be as effective here for the same reason: that only works if we're dealing with analytic functions.  We would like to develop a method that lets us solve ODEs that involve discontinuous quantities. The approach that we'll take is to introduce a smoothing operator in the form of an integral.   We will see in that integrals can be used to smooth out cusps and jumps in the graph of a function. This is analogous to smoothing edges in an image by applying a blur filter.    Definition and Basic Properties   The Laplace Transform  Laplace transform definition    Laplace transform of    Let be defined for . The Laplace transform of is the function , or , defined by for all values of such that exists. We often say that is in the time domain while is in the frequency domain .     The time domain and frequency domain terminology employed in is a little unusual at the moment, but will hopefully make more sense in . Essentially, if is a complex parameter then the exponential that appears in the Laplace transform introduces sinusoidal waves by Euler's formula . The parameter then determines the frequency of these waves.   Derivatives of discontinuous functions are not as well behaved as integrals of discontinuous functions. Therefore the Laplace transform should prove to be a useful tool in dealing with differential equations that have discontinuous terms. This is something we will begin to look at in . For now, we just want to get some practice performing computations with this new formula in the next couple of examples.   Computing a Laplace transform   Compute .     Computing the Laplace transform of   Compute the Laplace transform of .    We compute the Laplace transform using the definition: .    In general, if is a whole number.  The Laplace transform is also an example of a linear transformation . In particular, we have the following useful theorem for simplifying certain transforms.   Linearity of the Laplace transform   Let and be constants and suppose and are functions with respective Laplace transforms and . Then .    In combination with the formula , we can now compute the Laplace transform of any polynomial function with relative ease.   Computing the transform of a polynomial   Compute .    We could use the definition once again, but here's an easier way using the linearity of the Laplace transform. First, note that , and so .    As mentioned previously, the Laplace transform works well with some discontinuous functions due to its definition as an integral. The exponential kernel  acts to smooth out discontinuities present in a function.   The Unit Step Function   Let be the unit step function , which is defined by . Compute .    Note that we are computing a translation of the usual unit step function. Since we don't have a formula for the transform of a (translated) unit step, we will need to compute using the definition of the Laplace transform: .    We can verify the result of using Sage as below:   Some other important Laplace transforms are given below: . Formulas such as these can be proved using , which often requires (repeated) applications of integration by parts. A trickier way to prove some transform formulas makes use of power series.   Finding a transform using power series   Find where is a constant.    The power series for centered at is . This power series converges everywhere and we can take its Laplace transform. By linearity, we get .  Therefore .      The Inverse Laplace Transform; -shifting  The Laplace transform method that we will see in involves transforming a time domain problem into a frequency domain problem that can be solved with algebra. The crucial next step is transforming the frequency domain solution of our problem back into the time domain. The next result justifies this last step.   Uniqueness of Laplace Transforms   Suppose and have respective Laplace transforms and . If for all (for some constant ) and and are piecewise continuous, then on the interval .     says that the Laplace transform is unique for continuous functions: two different continuous functions will have two different Laplace transforms. This allows us to talk about taking inverse Laplace transforms.   Inverse Laplace Transform  Laplace transform inverse transform    inverse Laplace transform of    The inverse Laplace transform of a function , denoted , is a function such that .   There is an integral formula for the inverse Laplace transform as well. In particular, where is a large enough real number. We aren't quite equipped to deal integrals such as this, so we will focus on using a table of Laplace transforms as in to compute inverse transforms.     Simple inverse transforms can be found by reversing known transforms. For example, for . The linearity of the inverse transform is also helpful in computing certain transformations.   Finding an inverse transform   A continuous function has Laplace transform . Find .    We can find by taking the inverse Laplace transform of each term in : . So .   Technically, we can only say that we know for . We have no knowledge whatsoever about for . However, this will cause no trouble for us.     Now we will move on to more general formulas for computing Laplace transformations and their inverses. The first such formula shows a correspondence between time scaling and frequency shifting .   -shifting   Suppose that has Laplace transform , defined for for some . Then . In other words, multiplication by an exponential in the time domain corresponds to translation by in the frequency domain .     allows to find a wide range of inverse transformations. In combination with partial fractions, we can now (theoretically) find the inverse transform of any rational function of .   Inverse Laplace with frequency shifting   A function has Laplace transform . Find .    We'll start by completing the square on the denominator of to see if we can make it look like for some : . This looks an awful lot like the transform of . Since we have instead of , this tells us that .    The following Sage cell verifies the computation in .     Now that we've had some practice in evaluating Laplace transforms, we'll move on to using them to solve differential equations.   "
},
{
  "id": "example-motivating-laplace",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-motivating-laplace",
  "type": "Example",
  "number": "6.1.1",
  "title": "Motivating the Laplace transform.",
  "body": " Motivating the Laplace transform   A mass of 1 is attached to a spring that is held 1 to the right of its equilibrium position by a force of 4 . Beginning at time , a machine is turned on and applies an external force of to the mass. At time the machine is turned off and the external force disappears. Let be the displacement of the mass at time . What is an ODE that models the motion of the mass?    We can set this model up as we did in . By Hooke's Law and Newton's Second Law, we have where is the external force at time . Since , and the motion of the mass satisfies the ODE .   "
},
{
  "id": "definition-the-laplace-transform",
  "level": "2",
  "url": "section-the-laplace-transform.html#definition-the-laplace-transform",
  "type": "Definition",
  "number": "6.1.2",
  "title": "The Laplace Transform.",
  "body": " The Laplace Transform  Laplace transform definition    Laplace transform of    Let be defined for . The Laplace transform of is the function , or , defined by for all values of such that exists. We often say that is in the time domain while is in the frequency domain .   "
},
{
  "id": "example-computing-a-laplace-transform",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-computing-a-laplace-transform",
  "type": "Example",
  "number": "6.1.3",
  "title": "Computing a Laplace transform.",
  "body": " Computing a Laplace transform   Compute .   "
},
{
  "id": "example-computing-the-laplace-of-t-",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-computing-the-laplace-of-t-",
  "type": "Example",
  "number": "6.1.4",
  "title": "Computing the Laplace transform of <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(t\\)<\/span>.",
  "body": " Computing the Laplace transform of   Compute the Laplace transform of .    We compute the Laplace transform using the definition: .   "
},
{
  "id": "subsection-definition-and-basic-properties-8",
  "level": "2",
  "url": "section-the-laplace-transform.html#subsection-definition-and-basic-properties-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear transformation "
},
{
  "id": "theorem-linearity-of-the-laplace-transform",
  "level": "2",
  "url": "section-the-laplace-transform.html#theorem-linearity-of-the-laplace-transform",
  "type": "Theorem",
  "number": "6.1.5",
  "title": "Linearity of the Laplace transform.",
  "body": " Linearity of the Laplace transform   Let and be constants and suppose and are functions with respective Laplace transforms and . Then .   "
},
{
  "id": "example-computing-the-transform-of-a-polynomial",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-computing-the-transform-of-a-polynomial",
  "type": "Example",
  "number": "6.1.6",
  "title": "Computing the transform of a polynomial.",
  "body": " Computing the transform of a polynomial   Compute .    We could use the definition once again, but here's an easier way using the linearity of the Laplace transform. First, note that , and so .   "
},
{
  "id": "example-the-unit-step-function",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-the-unit-step-function",
  "type": "Example",
  "number": "6.1.7",
  "title": "The Unit Step Function.",
  "body": " The Unit Step Function   Let be the unit step function , which is defined by . Compute .    Note that we are computing a translation of the usual unit step function. Since we don't have a formula for the transform of a (translated) unit step, we will need to compute using the definition of the Laplace transform: .   "
},
{
  "id": "example-laplace-finding-a-transform-using-power-series",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-laplace-finding-a-transform-using-power-series",
  "type": "Example",
  "number": "6.1.8",
  "title": "Finding a transform using power series.",
  "body": " Finding a transform using power series   Find where is a constant.    The power series for centered at is . This power series converges everywhere and we can take its Laplace transform. By linearity, we get .  Therefore .   "
},
{
  "id": "theorem-uniqueness-of-inverse-laplace",
  "level": "2",
  "url": "section-the-laplace-transform.html#theorem-uniqueness-of-inverse-laplace",
  "type": "Theorem",
  "number": "6.1.9",
  "title": "Uniqueness of Laplace Transforms.",
  "body": " Uniqueness of Laplace Transforms   Suppose and have respective Laplace transforms and . If for all (for some constant ) and and are piecewise continuous, then on the interval .   "
},
{
  "id": "definition-inverse-laplace",
  "level": "2",
  "url": "section-the-laplace-transform.html#definition-inverse-laplace",
  "type": "Definition",
  "number": "6.1.10",
  "title": "Inverse Laplace Transform.",
  "body": " Inverse Laplace Transform  Laplace transform inverse transform    inverse Laplace transform of    The inverse Laplace transform of a function , denoted , is a function such that .   There is an integral formula for the inverse Laplace transform as well. In particular, where is a large enough real number. We aren't quite equipped to deal integrals such as this, so we will focus on using a table of Laplace transforms as in to compute inverse transforms.    "
},
{
  "id": "example-finding-inverse-laplace",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-finding-inverse-laplace",
  "type": "Example",
  "number": "6.1.11",
  "title": "Finding an inverse transform.",
  "body": " Finding an inverse transform   A continuous function has Laplace transform . Find .    We can find by taking the inverse Laplace transform of each term in : . So .   Technically, we can only say that we know for . We have no knowledge whatsoever about for . However, this will cause no trouble for us.    "
},
{
  "id": "theorem--s--shifting",
  "level": "2",
  "url": "section-the-laplace-transform.html#theorem--s--shifting",
  "type": "Theorem",
  "number": "6.1.12",
  "title": "<span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(s\\)<\/span>-shifting.",
  "body": " -shifting   Suppose that has Laplace transform , defined for for some . Then . In other words, multiplication by an exponential in the time domain corresponds to translation by in the frequency domain .   "
},
{
  "id": "example-inverse-laplace-with-frequency-shifting",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-inverse-laplace-with-frequency-shifting",
  "type": "Example",
  "number": "6.1.13",
  "title": "Inverse Laplace with frequency shifting.",
  "body": " Inverse Laplace with frequency shifting   A function has Laplace transform . Find .    We'll start by completing the square on the denominator of to see if we can make it look like for some : . This looks an awful lot like the transform of . Since we have instead of , this tells us that .   "
},
{
  "id": "section-transformation-of-initial-value-problems",
  "level": "1",
  "url": "section-transformation-of-initial-value-problems.html",
  "type": "Section",
  "number": "6.2",
  "title": "Transformation of Initial Value Problems",
  "body": " Transformation of Initial Value Problems  Transformation of IVPs   In this section we begin using the Laplace transform to solve initial value problems. The basic outline of our approach is this:  Transform an IVP into a frequency domain equation.  Solve the transformed equation in the frequency domain to get a function .  Take the inverse transform of to get a time solution of the IVP.  The result that makes all of this work is below.   Laplace Transforms of Derivatives   Suppose that the function is piecewise smooth and that exists. Then exists and .    The above theorem says that differentiation in the time domain corresponds to multiplication by in the frequency domain. This will be the most useful property of the Laplace transform for us: it will turn differential equations in the time domain into algebraic equations in the frequency domain.    Solving IVPs with the Laplace Transform  We will mostly deal with second-order ODEs, so it will be useful to find how the Laplace transform affects a second derivative. This will be a quick application of .   Laplace Transform of a second derivative   Let be piecewise smooth with Laplace transform . Compute using .    By we know that . We can apply to as well, since it must also be piecewise smooth: .  This process can be continued indefinitely. In general, . This gives us everything we need to start solving ODEs using Laplace transforms.    As seen in , the order of a differential equation in the time domain corresponds to a polynomial of matching degree in the frequency domain. Hence, we are transforming a calculus problem into an algebraic one. We will demonstrate the Laplace transform method with an example.   Solving a second-order IVP   Solve the IVP where is a function of .    We will solve this by using Laplace transforms. If we set , then . So if we take the Laplace transform of the entire ODE, we get which simplifies to , and so .  To solve the ODE we need to find . Now, doesn't look like the Laplace transform of anything we know at the moment, but we can simplify the right hand side using partial fractions. If we do so, we get . Therefore, .    Note that we could have solved the ODE in without resorting to Laplace transforms by using characteristic equations. However, the Laplace transform method did make dealing with the initial conditions more straightforward. Furthermore, the method remains the same even if applied to a linear nonhomogeneous IVP.   Nonhomogeneous IVPs with Laplace Transforms   Solve the IVP given by .    We begin by taking the Laplace transform of both sides to get or just . So .  Now we use partial fractions to help us find . In particular, so the solution of the ODE is .     One restriction of the Laplace transform approach as we've developed it is that it requires initial conditions at . If initial conditions are instead given at some other , then we need to adjust our approach in order to continue to use and its counterpart for second derivatives. We'll demonstrate this by example.   Solving an IVP with Shifted Initial Conditions   Solve the IVP given by .    We would like to take the Laplace transform of both sides of this ODE, but since the initial conditions are not specified at we can't do so right away. The trick here is to shift the initial conditions back to as follows. First, we define a new function by where is the solution we seek. Then it follows that and and . So the Laplace transform method applies to solving for in this modified IVP.  Now that we can take the Laplace transform of both sides of the modified IVP, we do so and obtain the Laplace transform of . Using our initial conditions and a bit of algebra, we get . At this point we can take the inverse Laplace transform (either using partial fractions or using technology) to get .  The final step is to convert our answer from to by making the substitution in . This gives as the solution of our IVP.      "
},
{
  "id": "theorem-laplace-transforms-of-derivatives",
  "level": "2",
  "url": "section-transformation-of-initial-value-problems.html#theorem-laplace-transforms-of-derivatives",
  "type": "Theorem",
  "number": "6.2.1",
  "title": "Laplace Transforms of Derivatives.",
  "body": " Laplace Transforms of Derivatives   Suppose that the function is piecewise smooth and that exists. Then exists and .   "
},
{
  "id": "example-laplace-transform-of-a-second-derivative",
  "level": "2",
  "url": "section-transformation-of-initial-value-problems.html#example-laplace-transform-of-a-second-derivative",
  "type": "Example",
  "number": "6.2.2",
  "title": "Laplace Transform of a second derivative.",
  "body": " Laplace Transform of a second derivative   Let be piecewise smooth with Laplace transform . Compute using .    By we know that . We can apply to as well, since it must also be piecewise smooth: .  This process can be continued indefinitely. In general, . This gives us everything we need to start solving ODEs using Laplace transforms.   "
},
{
  "id": "example-solving-ivps-with-laplace-transforms",
  "level": "2",
  "url": "section-transformation-of-initial-value-problems.html#example-solving-ivps-with-laplace-transforms",
  "type": "Example",
  "number": "6.2.3",
  "title": "Solving a second-order IVP.",
  "body": " Solving a second-order IVP   Solve the IVP where is a function of .    We will solve this by using Laplace transforms. If we set , then . So if we take the Laplace transform of the entire ODE, we get which simplifies to , and so .  To solve the ODE we need to find . Now, doesn't look like the Laplace transform of anything we know at the moment, but we can simplify the right hand side using partial fractions. If we do so, we get . Therefore, .   "
},
{
  "id": "example-nonhomogeneous-ivps-with-laplace-transforms",
  "level": "2",
  "url": "section-transformation-of-initial-value-problems.html#example-nonhomogeneous-ivps-with-laplace-transforms",
  "type": "Example",
  "number": "6.2.4",
  "title": "Nonhomogeneous IVPs with Laplace Transforms.",
  "body": " Nonhomogeneous IVPs with Laplace Transforms   Solve the IVP given by .    We begin by taking the Laplace transform of both sides to get or just . So .  Now we use partial fractions to help us find . In particular, so the solution of the ODE is .   "
},
{
  "id": "example-solving-an-ivp-with-shifted-initial-conditions",
  "level": "2",
  "url": "section-transformation-of-initial-value-problems.html#example-solving-an-ivp-with-shifted-initial-conditions",
  "type": "Example",
  "number": "6.2.5",
  "title": "Solving an IVP with Shifted Initial Conditions.",
  "body": " Solving an IVP with Shifted Initial Conditions   Solve the IVP given by .    We would like to take the Laplace transform of both sides of this ODE, but since the initial conditions are not specified at we can't do so right away. The trick here is to shift the initial conditions back to as follows. First, we define a new function by where is the solution we seek. Then it follows that and and . So the Laplace transform method applies to solving for in this modified IVP.  Now that we can take the Laplace transform of both sides of the modified IVP, we do so and obtain the Laplace transform of . Using our initial conditions and a bit of algebra, we get . At this point we can take the inverse Laplace transform (either using partial fractions or using technology) to get .  The final step is to convert our answer from to by making the substitution in . This gives as the solution of our IVP.   "
},
{
  "id": "section-unit-step-functions-and-time-shifting",
  "level": "1",
  "url": "section-unit-step-functions-and-time-shifting.html",
  "type": "Section",
  "number": "6.3",
  "title": "Unit Step Functions and <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(t\\)<\/span>-Shifting",
  "body": " Unit Step Functions and -Shifting  -shifting   Recall that tells us how to deal with translation in the frequency domain: . A similar result is true for -shifting, but we must examine another function first.  The unit step function or Heaviside function is the function defined by . Note also that for any . We examined the Laplace transform of a specific translate in , and the work done in that example can be used to prove the following general formula: . This is the only transform equation we have up to this point that involves translation in the time domain. This suggests that expressions involving translations in the time domain might involve exponential terms in the frequency domain.    Time Shifting  Our general formula for dealing with translated functions in the time domain is the next theorem.   Time Shifting of Laplace Transforms  Laplace transform -shifting   Let denote a piecewise continuous function with Laplace transform . Let . Then , or equivalently .    To compute this we need to rely on the definition of the Laplace transform: .     allows us to take transforms of time-shifted functions and inverse transforms of expressions involving exponentials. This will become particularly important once we introduce the Dirac delta function in .   Computing the transform of time-shifted functions   Compute Laplace transforms of the following functions:        We will use to compute both of these transforms. The first transform is relatively easy to find once we recognize that , and so .  The next transform requires a bit more care since must fit the form before we can use . In particular, we need which means that . Therefore .     Inverse transform involving an exponential   Compute the inverse Laplace transform of .    The exponential term tells us that our inverse transform should involve the unit step . To find the rest of our inverse transform, we must identify . By factoring, we get . This involves frequency shifting and so we apply to compute the inverse transform: .  Therefore, .    It's important to emphasize that that inverse transform of is not  . Rather, it is a translate of given by shifting exactly units to the right. The figure below demonstrates this for .   Inverse transform of and        Transforms of Piecewise Functions  The Heaviside function is useful for describing forces that turn on or off at specified times. In particular, we can now solve the IVP given at the start of this chapter in .   IVP with Discontinuous Forcing Function   A mass of 1 is attached to a spring that is held 1 to the right of its equilibrium position by a force of 4 . Beginning at time , a machine is turned on and applies an external force of to the mass. At time the machine is turned off and the external force disappears. Let be the displacement of the mass at time . What is an ODE that models the motion of the mass?    By Hooke's Law and Newton's Second Law, we have where is the external force at time . Since , and the motion of the mass satisfies the IVP . We can rewrite as follows: . So the IVP we need to solve is .  If we take Laplace transforms, this becomes where . So . If we solve this for , we get and if we simplify this using partial fractions this becomes .  So the solution of the IVP is .    Although it's important to know how to deal with Laplace transforms of basic functions by hand, if only to understand the behavior of the transform itself in solving differential equations, computing transforms of more complicated functions or piecewise functions like the function in are perhaps better left to computer systems. The code cell below demonstrates how Sage can compute such a transform. Be careful to place matching brackets and parentheses as appropriate when using the piecewise command in Sage to construct a piecewise function.    "
},
{
  "id": "section-unit-step-functions-and-time-shifting-3-2",
  "level": "2",
  "url": "section-unit-step-functions-and-time-shifting.html#section-unit-step-functions-and-time-shifting-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit step function Heaviside function "
},
{
  "id": "theorem-time-shifting-of-laplace-transforms",
  "level": "2",
  "url": "section-unit-step-functions-and-time-shifting.html#theorem-time-shifting-of-laplace-transforms",
  "type": "Theorem",
  "number": "6.3.1",
  "title": "Time Shifting of Laplace Transforms.",
  "body": " Time Shifting of Laplace Transforms  Laplace transform -shifting   Let denote a piecewise continuous function with Laplace transform . Let . Then , or equivalently .    To compute this we need to rely on the definition of the Laplace transform: .   "
},
{
  "id": "example-computing-the-transform-of-a-time-shifted-function",
  "level": "2",
  "url": "section-unit-step-functions-and-time-shifting.html#example-computing-the-transform-of-a-time-shifted-function",
  "type": "Example",
  "number": "6.3.2",
  "title": "Computing the transform of time-shifted functions.",
  "body": " Computing the transform of time-shifted functions   Compute Laplace transforms of the following functions:        We will use to compute both of these transforms. The first transform is relatively easy to find once we recognize that , and so .  The next transform requires a bit more care since must fit the form before we can use . In particular, we need which means that . Therefore .   "
},
{
  "id": "example-inverse-transform-involving-an-exponential",
  "level": "2",
  "url": "section-unit-step-functions-and-time-shifting.html#example-inverse-transform-involving-an-exponential",
  "type": "Example",
  "number": "6.3.3",
  "title": "Inverse transform involving an exponential.",
  "body": " Inverse transform involving an exponential   Compute the inverse Laplace transform of .    The exponential term tells us that our inverse transform should involve the unit step . To find the rest of our inverse transform, we must identify . By factoring, we get . This involves frequency shifting and so we apply to compute the inverse transform: .  Therefore, .   "
},
{
  "id": "figure-laplace-function-and-translate",
  "level": "2",
  "url": "section-unit-step-functions-and-time-shifting.html#figure-laplace-function-and-translate",
  "type": "Figure",
  "number": "6.3.4",
  "title": "",
  "body": " Inverse transform of and     "
},
{
  "id": "example-ivp-with-discontinuous-forcing-function",
  "level": "2",
  "url": "section-unit-step-functions-and-time-shifting.html#example-ivp-with-discontinuous-forcing-function",
  "type": "Example",
  "number": "6.3.5",
  "title": "IVP with Discontinuous Forcing Function.",
  "body": " IVP with Discontinuous Forcing Function   A mass of 1 is attached to a spring that is held 1 to the right of its equilibrium position by a force of 4 . Beginning at time , a machine is turned on and applies an external force of to the mass. At time the machine is turned off and the external force disappears. Let be the displacement of the mass at time . What is an ODE that models the motion of the mass?    By Hooke's Law and Newton's Second Law, we have where is the external force at time . Since , and the motion of the mass satisfies the IVP . We can rewrite as follows: . So the IVP we need to solve is .  If we take Laplace transforms, this becomes where . So . If we solve this for , we get and if we simplify this using partial fractions this becomes .  So the solution of the IVP is .   "
},
{
  "id": "section-dirac-delta-functions",
  "level": "1",
  "url": "section-dirac-delta-functions.html",
  "type": "Section",
  "number": "6.4",
  "title": "Dirac Delta Functions",
  "body": " Dirac Delta Functions   Impulses  Forces that act over very short time intervals may be complicated to describe exactly, but it we can approximate such a force if we treat it as instantaneous. Our goal now is describe a meaningful mathematical interpretation of an instantaneous force.  To be specific, let be a force that acts only from to (and is otherwise ). Then the impulse of the force over the interval is given by . We view the impulse as essentially describing how the force acts over a short time interval, so we can switch from modeling instantaneous forces to instantaneous impulses. And since the impulse is a number, all we really need to do is model an instantaneous unit impulse ; any other impulse we can get by multiplication by a constant.  So this is our goal: find some function that has an instantaneous unit impulse at the point . In other words, we want to find a function such that But this is impossible for any function, since . However, we can approximate the idea of an instantaneous unit impulse by defining    Approximating the instantaneous unit impulse.   A plot of approximations to an instantaneous unit impulse.     As indicated in , this function is defined so that the area under the graph is regardless of the value of . Therefore for all . Although the instantaneous unit impulse we tried to define earlier can't actually be a function, is a completely valid function for all positive . Furthermore, if we send then it becomes a better and better approximation to an ideal instantaneous unit impulse. Despite the fact that this limit does not exist (at least in the usual sense), we use it as a definition.   The Dirac Delta Function  Dirac delta function   The Dirac delta function , denoted by the symbol , is defined by the equation .    The Dirac delta function is, of course, not an actual function, but it's still useful as a mathematical formulation of an instantaneous force with unit impulse at . And this expression is often perfectly valid to work with inside of integrals due to the sampling property discussed below.   The Dirac delta is actually an example of a generalized function , or tempered distribution .   We can also take translations of the Dirac delta, which we view as a function  defined piecewise by We can represent this graphically as an arrow (see ).   A plot of the Dirac delta function.   A plot of the Dirac delta function.     The most important property of the Dirac delta is that This property can be generalized to products involving the Dirac delta and continuous functions. Very roughly, if represents an arrow with an area of concentrated at , then represents an arrow with area concentrated at . This sampling property is stated more precisely as .   Sampling Property of the Dirac Delta  Dirac delta function sampling   Let be a continuous function and let . Then     We treat as a function and perform the above integration:     The above theorem gives us another interpretation of the Dirac delta: it's a sampling function. When integrated against another function over an interval containing , will pick out the value . We can use this to quickly find the Laplace transform of the Dirac delta.   Laplace Transform of the Dirac Delta Function   Compute , where .    We use the definition of the Laplace transform: . In particular, .      Dirac Delta Models  We will primarily use the Dirac delta to model instantaneous forces, such as sudden kicks or jolts. Although this is not strictly realistic since such forces are still imparted over some interval of time, treating the force as instantaneous often simplifies computations.   IVP with Impulse   An object of mass , at rest, is attached to a spring with spring constant . At time , the a hammer strikes the mass providing an impulse of and setting the mass in motion. What is the displacement ?    The displacement satisfies the ODE where is the external force. Since the hammer strikes quickly, we can model it as an instantaneous force of the form . And since it provides an impulse of , we can pick . As the mass is initially at rest, satisfies the IVP . To solve this, we take the Laplace transform of the IVP to get or just . So .    Note that the above solution does not appear to satisfy our initial conditions. However, since we assumed the impulse acted instantaneously at time , this is really the same as assuming that the mass had an initial velocity. Now we look at what happens if we delay the hammer strike.   Time-delayed Strike   Consider the spring-mass system above, but suppose now that the hammer hits the mass at time . What is the displacement ?    This time, the IVP we must solve is . If we take Laplace transforms and solve for we get and so . This function is plotted in below. Note the clear appearance of the sine wave in the solution once the hammer strikes the mass at .   Displacement influenced by a time-delayed hammer strike.   A plot of the displacement of a spring-mass system with time-delayed hammer strike.        Resonance with an Impulse Train   Once again we consider the spring-mass system used above in , but now we suppose that the mass is struck with the hammer once every seconds, starting at . Find .    The IVP we need to solve now is where . So once more we take Laplace transforms to get and so . The displacement is then given by . Each time the hammer strikes the mass, a factor of is added to the displacement. The repeated hammer strikes are in tune with the natural frequency of the mass, so they create resonance. This is clearly demonstrated in the figure below.   The displacement and resonance with the impulse train.   A plot of the displacement of a spring-mass system subject to an impulse train of Dirac delta functions.        The Dirac delta function is also important mathematically in determining the behavior of certain systems. For example, consider the system determined by the IVP . We can imagine that the ODE is a mathematical machine that converts the input into an output, or response, . Using Laplace transforms it's not difficult to determine : . So we see that the Laplace transform of the response is related to the Laplace transform of the input by . This function is the transfer function of the system and determines all possible responses.  Now here's the connection with the Dirac delta. If we replace with to get the system and take Laplace transforms, we get . In other words, the transfer function is just the Laplace transform of the solution of . We call the solution the impulse reponse of the system. In this case, the impulse response is . Since the corresponding transfer function determines the form of for all responses , the impulse reponse must determine the form of all responses in the time domain. We will see precisely how in the next section by introducing the concept of a convolution .  "
},
{
  "id": "subsection-impulses-3",
  "level": "2",
  "url": "section-dirac-delta-functions.html#subsection-impulses-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "impulse "
},
{
  "id": "figure-dirac-delta-functions-approximation-unit-impulse",
  "level": "2",
  "url": "section-dirac-delta-functions.html#figure-dirac-delta-functions-approximation-unit-impulse",
  "type": "Figure",
  "number": "6.4.1",
  "title": "",
  "body": " Approximating the instantaneous unit impulse.   A plot of approximations to an instantaneous unit impulse.    "
},
{
  "id": "definition-dirac-delta",
  "level": "2",
  "url": "section-dirac-delta-functions.html#definition-dirac-delta",
  "type": "Definition",
  "number": "6.4.2",
  "title": "The Dirac Delta Function.",
  "body": " The Dirac Delta Function  Dirac delta function   The Dirac delta function , denoted by the symbol , is defined by the equation .   "
},
{
  "id": "subsection-impulses-9-1",
  "level": "2",
  "url": "section-dirac-delta-functions.html#subsection-impulses-9-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generalized function tempered distribution "
},
{
  "id": "figure-dirac-delta-plot",
  "level": "2",
  "url": "section-dirac-delta-functions.html#figure-dirac-delta-plot",
  "type": "Figure",
  "number": "6.4.3",
  "title": "",
  "body": " A plot of the Dirac delta function.   A plot of the Dirac delta function.    "
},
{
  "id": "subsection-impulses-12",
  "level": "2",
  "url": "section-dirac-delta-functions.html#subsection-impulses-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sampling property "
},
{
  "id": "theorem-sifting-property",
  "level": "2",
  "url": "section-dirac-delta-functions.html#theorem-sifting-property",
  "type": "Theorem",
  "number": "6.4.4",
  "title": "Sampling Property of the Dirac Delta.",
  "body": " Sampling Property of the Dirac Delta  Dirac delta function sampling   Let be a continuous function and let . Then     We treat as a function and perform the above integration:    "
},
{
  "id": "example-laplace-transform-of-the-dirac-delta-function",
  "level": "2",
  "url": "section-dirac-delta-functions.html#example-laplace-transform-of-the-dirac-delta-function",
  "type": "Example",
  "number": "6.4.5",
  "title": "Laplace Transform of the Dirac Delta Function.",
  "body": " Laplace Transform of the Dirac Delta Function   Compute , where .    We use the definition of the Laplace transform: . In particular, .   "
},
{
  "id": "example-ivp-with-impulse",
  "level": "2",
  "url": "section-dirac-delta-functions.html#example-ivp-with-impulse",
  "type": "Example",
  "number": "6.4.6",
  "title": "IVP with Impulse.",
  "body": " IVP with Impulse   An object of mass , at rest, is attached to a spring with spring constant . At time , the a hammer strikes the mass providing an impulse of and setting the mass in motion. What is the displacement ?    The displacement satisfies the ODE where is the external force. Since the hammer strikes quickly, we can model it as an instantaneous force of the form . And since it provides an impulse of , we can pick . As the mass is initially at rest, satisfies the IVP . To solve this, we take the Laplace transform of the IVP to get or just . So .   "
},
{
  "id": "example-time-delay",
  "level": "2",
  "url": "section-dirac-delta-functions.html#example-time-delay",
  "type": "Example",
  "number": "6.4.7",
  "title": "Time-delayed Strike.",
  "body": " Time-delayed Strike   Consider the spring-mass system above, but suppose now that the hammer hits the mass at time . What is the displacement ?    This time, the IVP we must solve is . If we take Laplace transforms and solve for we get and so . This function is plotted in below. Note the clear appearance of the sine wave in the solution once the hammer strikes the mass at .   Displacement influenced by a time-delayed hammer strike.   A plot of the displacement of a spring-mass system with time-delayed hammer strike.      "
},
{
  "id": "example-resonance-with-an-impulse-train",
  "level": "2",
  "url": "section-dirac-delta-functions.html#example-resonance-with-an-impulse-train",
  "type": "Example",
  "number": "6.4.9",
  "title": "Resonance with an Impulse Train.",
  "body": " Resonance with an Impulse Train   Once again we consider the spring-mass system used above in , but now we suppose that the mass is struck with the hammer once every seconds, starting at . Find .    The IVP we need to solve now is where . So once more we take Laplace transforms to get and so . The displacement is then given by . Each time the hammer strikes the mass, a factor of is added to the displacement. The repeated hammer strikes are in tune with the natural frequency of the mass, so they create resonance. This is clearly demonstrated in the figure below.   The displacement and resonance with the impulse train.   A plot of the displacement of a spring-mass system subject to an impulse train of Dirac delta functions.      "
},
{
  "id": "section-dirac-delta-functions-4",
  "level": "2",
  "url": "section-dirac-delta-functions.html#section-dirac-delta-functions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transfer function "
},
{
  "id": "section-dirac-delta-functions-5",
  "level": "2",
  "url": "section-dirac-delta-functions.html#section-dirac-delta-functions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "impulse reponse "
},
{
  "id": "section-convolution-products",
  "level": "1",
  "url": "section-convolution-products.html",
  "type": "Section",
  "number": "6.5",
  "title": "Convolution Products",
  "body": " Convolution Products   Consider the function in the frequency domain defined by . This does not match a Laplace transform on our table. If we wanted to find the inverse transform , we would have to use partial fractions to find it. This is certainly feasible, but more than a little tedious.  However, is easily seen to be the product of two recognizable transforms: . What we would like to do is find a way to determine inverse transforms of products of transforms. To do this, we need to define the convolution of two functions, which is the time domain operation that corresponds to multiplication in the frequency domain.    Convolutions   Convolution of Functions  convolutions    convolution of and    Let and be piecewise continuous functions. The convolution of and , denoted by , or just , is defined for by .     Note that lies in the time domain instead of the frequency domain. In general, we will only take convolutions of functions in the time domain.   It's difficult to build intuition for precisely what convolutions do based on the formula alone, but one reason that convolutions are important is because they act as smoothing operators . If you have a rough (i.e. non-differentiable) function, then taking the convolution of it with a properly chosen smooth function may give you a smooth approximation. We will see another interpretation of the convolution at the end of this section.   Convolution with unit step   Compute , where is the unit step function.    By definition,     Convolutions can be thought of as a peculiar kind of multiplication for functions. They are commutative , that is, for any piecewise continuous functions and . They are also distributive : .    Convolutions and Transform Problems  An important property of convolutions is that they tend to work well with integral transforms. In particular, we have the following theorem.   Convolution Theorem  Laplace transforms Convolution Theorem   The Laplace transform distributes over convolution. In other words, if and are piecewise continuous functions, then . Equivalently, if we write and , then .    One way to phrase the above result is that Laplace transforms turns convolution in the time domain into multiplication in the frequency domain. Let's return to the example we started with.   Using the Convolution Theorem   Let . Find .    We will use to express the inverse transform: .     Solving IVPs with the Convolution Theorem   Let be a function of . Solve the IVP for in terms of the function .    We're trying to find the solution for arbitrary , which is something we definitely would not have been able to do in Chapter 3. We will do so using Laplace transforms and .  We start by taking the Laplace transform of the ODE to get where and . Now we solve for to get where . tells us then that where Therefore the solution of the ODE in terms of the function is given by .    There are a couple of interesting things happening in the last example. In particular, we were able to write the solution in terms of as . In these terms, we can recognize as the impulse response of the system discussed at the end of . Therefore the response of this system to the input is related to the impulse response by a convolution: . Essentially, this convolution integral tells us how to construct the response using only information about the input and the impulse response from the past and present. Recall that this relationship is even easier to write in the frequency domain: the frequency input is turned into the frequency output by means of the transfer function : .  There are multiple ways to find the transfer function, assuming that all initial conditions are . First, if is the input and is some measured output (once again, in the frequency domain), then the transfer function satisfies , and this quantity is independent of the particular choice of . We can also replace the time domain input with as discussed in to determine the impulse response directly. In this case, the corresponding output in the frequency domain is .   "
},
{
  "id": "definition-convolution-of-functions",
  "level": "2",
  "url": "section-convolution-products.html#definition-convolution-of-functions",
  "type": "Definition",
  "number": "6.5.1",
  "title": "Convolution of Functions.",
  "body": " Convolution of Functions  convolutions    convolution of and    Let and be piecewise continuous functions. The convolution of and , denoted by , or just , is defined for by .   "
},
{
  "id": "example-convolution-with-unit-step",
  "level": "2",
  "url": "section-convolution-products.html#example-convolution-with-unit-step",
  "type": "Example",
  "number": "6.5.2",
  "title": "Convolution with unit step.",
  "body": " Convolution with unit step   Compute , where is the unit step function.    By definition,    "
},
{
  "id": "theorem-convolution-transform",
  "level": "2",
  "url": "section-convolution-products.html#theorem-convolution-transform",
  "type": "Theorem",
  "number": "6.5.3",
  "title": "Convolution Theorem.",
  "body": " Convolution Theorem  Laplace transforms Convolution Theorem   The Laplace transform distributes over convolution. In other words, if and are piecewise continuous functions, then . Equivalently, if we write and , then .   "
},
{
  "id": "example-using-the-convolution-theorem",
  "level": "2",
  "url": "section-convolution-products.html#example-using-the-convolution-theorem",
  "type": "Example",
  "number": "6.5.4",
  "title": "Using the Convolution Theorem.",
  "body": " Using the Convolution Theorem   Let . Find .    We will use to express the inverse transform: .   "
},
{
  "id": "example-solving-ivps-with-the-convolution-theorem",
  "level": "2",
  "url": "section-convolution-products.html#example-solving-ivps-with-the-convolution-theorem",
  "type": "Example",
  "number": "6.5.5",
  "title": "Solving IVPs with the Convolution Theorem.",
  "body": " Solving IVPs with the Convolution Theorem   Let be a function of . Solve the IVP for in terms of the function .    We're trying to find the solution for arbitrary , which is something we definitely would not have been able to do in Chapter 3. We will do so using Laplace transforms and .  We start by taking the Laplace transform of the ODE to get where and . Now we solve for to get where . tells us then that where Therefore the solution of the ODE in terms of the function is given by .   "
},
{
  "id": "section-fourier-series",
  "level": "1",
  "url": "section-fourier-series.html",
  "type": "Section",
  "number": "7.1",
  "title": "Fourier Series",
  "body": " Fourier Series   The main idea behind Fourier series, and the field of harmonic analysis in general, is to represent more complicated objects in terms of simpler objects. A fundamental example of this idea comes from the field of linear algebra in the form of orthonormal bases . Knowing an orthonormal basis for a vector space can greatly simplify linear algebra in that vector space. In this section we'll do something similar with periodic functions , which are functions whose values repeat themselves.    Periodic Functions  Consider the function given by the following graph:   A periodic function   The graph of a periodic function.     If we look at the graph, we see that it repeats itself if we wait long enough (approximately every six units). Functions that have this property are called periodic functions .   Periodic Functions  periodic functions   Let be a real function defined for all . We say that is a periodic function if there exists a positive number such that for all . In this case we say that is -periodic . The (fundamental) period of is the smallest positive value of for which is -periodic, assuming this value exists.     Constant functions are examples of periodic functions with no fundamental period.    Periods of Sine and Cosine  Let be any positive integer. Then the functions and are both -periodic which follows from the corresponding addition formulas . The period, in particular, is . The periodic nature of these functions can also be seen from their graphs:   Graphs of and   An image showing the periodic nature of sine and cosine.      The graph in was produced by graphing In general, the (finite) sum of functions of the form where are integers is also -periodic. In particular, we have the following result.   Periods of Sums of Sinusoids   Let and where . Suppose that where represents the reduced fraction of . Then has period given by .     Finding Periods of Sums of Sinusoids   Find the periods of and .    For we have , which in lowest terms is . Therefore the period is . For , we have which is already in lowest terms. Therefore its period is .      Trigonometric Series and Fourier Series  One of the greatest accomplishments in mathematics was the realization that many other periodic functions can be written as a sum of sinusoids using trigonometric polynomials and trigonometric series .   Trigonometric Polynomials and Series  trigonometric polynomials and series   A trigonometric polynomial is a finite sum of the form for some natural number . A trigonometric series is a series of the form . For both sums the values are constants called the coefficients .    Our primary goal in this section is to take a function of period and express it as a trigonometric series. To see how, we'll suppose that we have the trigonometric series we want, i.e. that and we'll look at what the coefficients of the series need to be to make this equation true. To do this, we'll need the so-called orthogonality relations for .   Orthogonality Relations  Orthogonality relations   Let be whole numbers with . Then . Furthermore, and .    We can verify using a computer algebra system as below. Proving it is a little bit more work, but can be done using trigonometric identities or .    will be our primary tool for expressing a function as a trigonometric series. To see how, suppose that we have If this equation were true, then we should be able to integrate both sides of it and get another true equation. Since suggests that integrals involving simplify very nicely, we'll try to integrate both sides of the equation against from to for some . If we do this, we get This lets us solve for ! We have Similarly, The trigonometric series resulting from these coefficients is known as the Fourier series of . These formulas are useful enough that we'll place them together in a theorem.   Fourier Series Coefficients  Fourier series Coefficients   Let be a periodic function with period . Then the Fourier coefficients of are given by     Note that the formulas in tell us what the coefficients of a Fourier series representation of must be if such a representation existed, but as yet there is no guarantee that a function actually equals its Fourier series. Also, since is assumed to be -periodic we can also integrate over instead without changing the values of the coefficients.   The Fourier series of  Define for . To find its Fourier series, we can just use the previous formulas to find the values of the coefficients for . We know that   As nasty as these are, the first two are actually very easy to compute. Here's why: and are both odd functions, and the integral of any odd function in an interval that is symmetric about is always (since the areas cancel out). So for all .  The last term is a bit more complicated, but we can use integration by parts (and I definitely recommend using a computer here) to show that If we plug in the limits of integration and simplify (again, computers are handy for this!), we get So the Fourier series for is given by    A very good question at this point is, what relationship does the Fourier series that we found in the previous example have with the original function ? Are they actually equal? If we use the following code (adapted from here ) to compare the partial sums of the Fourier series with , then it looks like the partial sums get closer and closer if we choose larger values of . However, the graphs of the partial sums always seem to vary wildly at the endpoints of this curve. This is typical of Fourier series that are used to represent a discontinuous periodic function.     In general, the question of whether or not a given Fourier series makes sense is a difficult one to answer. In fact, the convergence of Fourier series for what one might consider to be the more \"well-behaved\" functions in mathematics was an open question until the 1960s. See Carleson's Theorem . However, for many of the functions we care about in this course we have the following theorem.   Fourier Series of Piecewise Continuous Functions  Fourier series convergence   Let be a piecewise continuous function on the interval , and suppose that it's also periodic with period , and is differentiable everywhere that it's continuous. Then the Fourier series of converges to except at the points where is discontinuous.     "
},
{
  "id": "section-fourier-series-2-1",
  "level": "2",
  "url": "section-fourier-series.html#section-fourier-series-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "periodic functions "
},
{
  "id": "figure-fourier-periodic-function",
  "level": "2",
  "url": "section-fourier-series.html#figure-fourier-periodic-function",
  "type": "Figure",
  "number": "7.1.1",
  "title": "",
  "body": " A periodic function   The graph of a periodic function.    "
},
{
  "id": "subsection-fourier-periodic-functions-4",
  "level": "2",
  "url": "section-fourier-series.html#subsection-fourier-periodic-functions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "periodic functions "
},
{
  "id": "definition-fourier-periodic-functions",
  "level": "2",
  "url": "section-fourier-series.html#definition-fourier-periodic-functions",
  "type": "Definition",
  "number": "7.1.2",
  "title": "Periodic Functions.",
  "body": " Periodic Functions  periodic functions   Let be a real function defined for all . We say that is a periodic function if there exists a positive number such that for all . In this case we say that is -periodic . The (fundamental) period of is the smallest positive value of for which is -periodic, assuming this value exists.   "
},
{
  "id": "example-fourier-period-sine-cosine",
  "level": "2",
  "url": "section-fourier-series.html#example-fourier-period-sine-cosine",
  "type": "Example",
  "number": "7.1.3",
  "title": "Periods of Sine and Cosine.",
  "body": " Periods of Sine and Cosine  Let be any positive integer. Then the functions and are both -periodic which follows from the corresponding addition formulas . The period, in particular, is . The periodic nature of these functions can also be seen from their graphs:   Graphs of and   An image showing the periodic nature of sine and cosine.     "
},
{
  "id": "theorem-fourier-periodic-periods-of-sums-of-sinusoids",
  "level": "2",
  "url": "section-fourier-series.html#theorem-fourier-periodic-periods-of-sums-of-sinusoids",
  "type": "Theorem",
  "number": "7.1.5",
  "title": "Periods of Sums of Sinusoids.",
  "body": " Periods of Sums of Sinusoids   Let and where . Suppose that where represents the reduced fraction of . Then has period given by .   "
},
{
  "id": "example-fourier-periodic-finding-periods-of-sums-of-sinusoids",
  "level": "2",
  "url": "section-fourier-series.html#example-fourier-periodic-finding-periods-of-sums-of-sinusoids",
  "type": "Example",
  "number": "7.1.6",
  "title": "Finding Periods of Sums of Sinusoids.",
  "body": " Finding Periods of Sums of Sinusoids   Find the periods of and .    For we have , which in lowest terms is . Therefore the period is . For , we have which is already in lowest terms. Therefore its period is .   "
},
{
  "id": "definition-fourier-periodic-trigonometric-polynomial-series",
  "level": "2",
  "url": "section-fourier-series.html#definition-fourier-periodic-trigonometric-polynomial-series",
  "type": "Definition",
  "number": "7.1.7",
  "title": "Trigonometric Polynomials and Series.",
  "body": " Trigonometric Polynomials and Series  trigonometric polynomials and series   A trigonometric polynomial is a finite sum of the form for some natural number . A trigonometric series is a series of the form . For both sums the values are constants called the coefficients .   "
},
{
  "id": "subsection-fourier-periodic-trigonometric-and-fourier-series-4",
  "level": "2",
  "url": "section-fourier-series.html#subsection-fourier-periodic-trigonometric-and-fourier-series-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonality relations "
},
{
  "id": "theorem-orthogonality-relations",
  "level": "2",
  "url": "section-fourier-series.html#theorem-orthogonality-relations",
  "type": "Theorem",
  "number": "7.1.8",
  "title": "Orthogonality Relations.",
  "body": " Orthogonality Relations  Orthogonality relations   Let be whole numbers with . Then . Furthermore, and .   "
},
{
  "id": "subsection-fourier-periodic-trigonometric-and-fourier-series-8",
  "level": "2",
  "url": "section-fourier-series.html#subsection-fourier-periodic-trigonometric-and-fourier-series-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier series "
},
{
  "id": "theorem-fourier-series-coefficients",
  "level": "2",
  "url": "section-fourier-series.html#theorem-fourier-series-coefficients",
  "type": "Theorem",
  "number": "7.1.9",
  "title": "Fourier Series Coefficients.",
  "body": " Fourier Series Coefficients  Fourier series Coefficients   Let be a periodic function with period . Then the Fourier coefficients of are given by    "
},
{
  "id": "example-fourier-series-of-x-cubed",
  "level": "2",
  "url": "section-fourier-series.html#example-fourier-series-of-x-cubed",
  "type": "Example",
  "number": "7.1.10",
  "title": "The Fourier series of <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(x^{3}\\)<\/span>.",
  "body": " The Fourier series of  Define for . To find its Fourier series, we can just use the previous formulas to find the values of the coefficients for . We know that   As nasty as these are, the first two are actually very easy to compute. Here's why: and are both odd functions, and the integral of any odd function in an interval that is symmetric about is always (since the areas cancel out). So for all .  The last term is a bit more complicated, but we can use integration by parts (and I definitely recommend using a computer here) to show that If we plug in the limits of integration and simplify (again, computers are handy for this!), we get So the Fourier series for is given by   "
},
{
  "id": "theorem-pointwise-convergence-of-fourier-series",
  "level": "2",
  "url": "section-fourier-series.html#theorem-pointwise-convergence-of-fourier-series",
  "type": "Theorem",
  "number": "7.1.11",
  "title": "Fourier Series of Piecewise Continuous Functions.",
  "body": " Fourier Series of Piecewise Continuous Functions  Fourier series convergence   Let be a piecewise continuous function on the interval , and suppose that it's also periodic with period , and is differentiable everywhere that it's continuous. Then the Fourier series of converges to except at the points where is discontinuous.   "
},
{
  "id": "section-functions-of-arbitrary-period-even-and-odd-extensions",
  "level": "1",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html",
  "type": "Section",
  "number": "7.2",
  "title": "Functions of Arbitrary Period; Even and Odd Extensions",
  "body": " Functions of Arbitrary Period; Even and Odd Extensions  Functions of Arbitrary Period   Now that we know how to find Fourier series of periodic functions with period , but not every periodic function has period . Important examples of such functions include the sawtooth wave and the square wave , which have applications in signal processing. These are shown in .   Sawtooth and square wave of period             Fourier Series of Functions of Arbitrary Period  We know how to find the Fourier series of a function of period by using . So we'd like to adapt this to functions that have period instead of . This actually won't be too hard to do, since any function of period can be scaled into a function with period .  To see how, let denote a function of period . Then we want to find a constant so that has period , that is, so that For this to be true, we need , or in other words . So if has period then has period , and furthermore has Fourier coefficients given by Now we need to get everything back in terms of , the function we started with. We can do this by making the substitution . This gives us the following theorem after a little algebra.   Fourier Series of Functions with Arbitrary Period  Fourier series Functions with period   Let be a function with period . Then the Fourier coefficients of are given by and the corresponding Fourier series is      With this theorem we can now find Fourier expansions of general periodic functions, including those given in .   Fourier series of a periodic extension of   Let for and have period . We can find its Fourier series using . If we do so, we get So the Fourier series of is given by .      Even and Odd Extensions  If you look at Examples and , then you'll notice that a lot of the Fourier coefficients were . In particular, for for the first example, and for the second. The reason for this has to do with even and odd functions .   Even and Odd Functions  Even and odd functions   Let be a function. We say that is     In other words, a function is even if and only if its graph is symmetric about the -axis, and is odd if and only if its graph is symmetric about the origin.  In and we began with functions that typically aren't thought of as periodic and found their Fourier series. Essentially what we did was we restricted our view of each function to a limited interval  in the case of and in the case of and then viewed that segment as defining a periodic function. This is the idea behind even and odd extensions of functions.   Even and Odd Extensions  Fourier series Even and odd extensions   Let be a function defined on . The even extension of is the even periodic function defined by extending the graph of on to the rest of the real numbers in such a way that the resulting function is even and has period . The odd extension of is defined similarly.    Computing Fourier series for even and odd functions is simpler than the general case.   Fourier Coefficients of Even and Odd Functions  Fourier series Fourier coefficients for even and odd functions   Let be periodic with period . If is even, then the Fourier coefficients of satisfy for . If is odd, then the Fourier coefficients of are      Even Extension of a Piecewise Function  Define the piecewise function by Then the even extension of is the new function given by We can use to help us find the Fourier series for . With a little bit of help, we get and , and so the Fourier series of is      "
},
{
  "id": "section-functions-of-arbitrary-period-even-and-odd-extensions-3-1",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#section-functions-of-arbitrary-period-even-and-odd-extensions-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sawtooth wave square wave "
},
{
  "id": "figure-fourier-sawtooth-square-wave",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#figure-fourier-sawtooth-square-wave",
  "type": "Figure",
  "number": "7.2.1",
  "title": "",
  "body": " Sawtooth and square wave of period          "
},
{
  "id": "theorem-fourier-series-of-functions-with-arbitrary-period",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#theorem-fourier-series-of-functions-with-arbitrary-period",
  "type": "Theorem",
  "number": "7.2.2",
  "title": "Fourier Series of Functions with Arbitrary Period.",
  "body": " Fourier Series of Functions with Arbitrary Period  Fourier series Functions with period   Let be a function with period . Then the Fourier coefficients of are given by and the corresponding Fourier series is    "
},
{
  "id": "example-fourier-series-of-x-squared",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#example-fourier-series-of-x-squared",
  "type": "Example",
  "number": "7.2.3",
  "title": "Fourier series of a periodic extension of <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(f(x) = x^{2}\\)<\/span>.",
  "body": " Fourier series of a periodic extension of   Let for and have period . We can find its Fourier series using . If we do so, we get So the Fourier series of is given by .  "
},
{
  "id": "subsection-even-and-odd-extensions-2",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#subsection-even-and-odd-extensions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "even and odd functions "
},
{
  "id": "definition-even-and-odd-functions",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#definition-even-and-odd-functions",
  "type": "Definition",
  "number": "7.2.4",
  "title": "Even and Odd Functions.",
  "body": " Even and Odd Functions  Even and odd functions   Let be a function. We say that is    "
},
{
  "id": "subsection-even-and-odd-extensions-5",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#subsection-even-and-odd-extensions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "even and odd extensions "
},
{
  "id": "definition-even-and-odd-extensions",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#definition-even-and-odd-extensions",
  "type": "Definition",
  "number": "7.2.5",
  "title": "Even and Odd Extensions.",
  "body": " Even and Odd Extensions  Fourier series Even and odd extensions   Let be a function defined on . The even extension of is the even periodic function defined by extending the graph of on to the rest of the real numbers in such a way that the resulting function is even and has period . The odd extension of is defined similarly.   "
},
{
  "id": "theorem-fourier-coefficients-of-even-and-odd-functions",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#theorem-fourier-coefficients-of-even-and-odd-functions",
  "type": "Theorem",
  "number": "7.2.6",
  "title": "Fourier Coefficients of Even and Odd Functions.",
  "body": " Fourier Coefficients of Even and Odd Functions  Fourier series Fourier coefficients for even and odd functions   Let be periodic with period . If is even, then the Fourier coefficients of satisfy for . If is odd, then the Fourier coefficients of are    "
},
{
  "id": "example-even-extension-of-a-piecewise-function",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#example-even-extension-of-a-piecewise-function",
  "type": "Example",
  "number": "7.2.7",
  "title": "Even Extension of a Piecewise Function.",
  "body": " Even Extension of a Piecewise Function  Define the piecewise function by Then the even extension of is the new function given by We can use to help us find the Fourier series for . With a little bit of help, we get and , and so the Fourier series of is   "
},
{
  "id": "section-complex-fourier-series-and-parsevals-identity",
  "level": "1",
  "url": "section-complex-fourier-series-and-parsevals-identity.html",
  "type": "Section",
  "number": "7.3",
  "title": "Complex Fourier Series and Parseval’s Identity",
  "body": " Complex Fourier Series and Parseval's Identity   Although we have a decent formula for Fourier series (see ), it's a little unwieldy due to the different expressions for and . We can fix this, perhaps surprisingly, by using complex exponentials and Euler's formula.    Complex Fourier Series  First, recall Euler's formula , which allows us to rewrite complex exponentials in terms of sine and cosine.  We can use to rewrite the Fourier series in . Our goal now is to find a complex Fourier series  for functions with period . We will also include the statement of in this new context.   Complex Fourier Series  Fourier series complex form   Let be a piecewise smooth function with period . Then the complex Fourier series of is given by where This Fourier series converges to wherever is continuous.    We need to use another orthogonality relation like we had in the real case, except now it will be written in terms of complex exponentials instead of sine and cosine. In particular, the relation we will use is the following: So if we set equal to a complex Fourier series and integrate both sides against for from to , we get where the last equality follows from the orthogonality relation we just proved. Therefore      Complex Fourier Series of Exponential Function  Let on and suppose that is periodic with period . We want to find the complex Fourier series for . We can do this by finding the correct coefficients : So we have for , since this is where has discontinuities.   Although the complex Fourier series can be easier to compute in some cases, there may be cases where we'd like to go back to the real Fourier series. The following formula lets us do so.   Real Fourier Series from Complex Fourier Series  Fourier series convert complex to real   Suppose has the complex Fourier series Then the corresponding coefficients and for the real Fourier series are given by     The real Fourier series corresponding to the complex Fourier series for from has coefficients Either way, we get the following Fourier series.     Parseval's Identity  One of the most important identities in mathematics is Parseval's identity , which we state next.   Parseval's Identity  Fourier series Parseval's identity   Let denote a piecewise-differentiable (real-valued) function on with real Fourier coefficients and complex Fourier coefficients . If exists and is finite, then     One of the great strengths of this identity is that it allows potentially complicated sums to be computed using integrals instead.   The Basel Problem  Basel problem  In the early century, one of the most renowned problems in mathematics was the Basel problem, which asked for the value of Euler was the first person to show that the sum is actually and it was this solution that made him famous Or at least math famous. in the first place. We can solve this by using Parseval's identity. To do so, let for . Then with a little bit of work we can find the (real) Fourier coefficients: By Parseval's identity, it then follows that which simplifies down to In other words,     "
},
{
  "id": "subsection-complex-fourier-series-3",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#subsection-complex-fourier-series-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex Fourier series "
},
{
  "id": "theorem-complex-fourier-series",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#theorem-complex-fourier-series",
  "type": "Theorem",
  "number": "7.3.1",
  "title": "Complex Fourier Series.",
  "body": " Complex Fourier Series  Fourier series complex form   Let be a piecewise smooth function with period . Then the complex Fourier series of is given by where This Fourier series converges to wherever is continuous.    We need to use another orthogonality relation like we had in the real case, except now it will be written in terms of complex exponentials instead of sine and cosine. In particular, the relation we will use is the following: So if we set equal to a complex Fourier series and integrate both sides against for from to , we get where the last equality follows from the orthogonality relation we just proved. Therefore    "
},
{
  "id": "example-complex-fourier-series-of-exponential-function",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#example-complex-fourier-series-of-exponential-function",
  "type": "Example",
  "number": "7.3.2",
  "title": "Complex Fourier Series of Exponential Function.",
  "body": " Complex Fourier Series of Exponential Function  Let on and suppose that is periodic with period . We want to find the complex Fourier series for . We can do this by finding the correct coefficients : So we have for , since this is where has discontinuities.  "
},
{
  "id": "theorem-real-fourier-series-from-complex-fourier-series",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#theorem-real-fourier-series-from-complex-fourier-series",
  "type": "Theorem",
  "number": "7.3.3",
  "title": "Real Fourier Series from Complex Fourier Series.",
  "body": " Real Fourier Series from Complex Fourier Series  Fourier series convert complex to real   Suppose has the complex Fourier series Then the corresponding coefficients and for the real Fourier series are given by    "
},
{
  "id": "subsection-parseval-s-identity-2",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#subsection-parseval-s-identity-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Parseval's identity "
},
{
  "id": "theorem-parseval-s-identity",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#theorem-parseval-s-identity",
  "type": "Theorem",
  "number": "7.3.4",
  "title": "Parseval’s Identity.",
  "body": " Parseval's Identity  Fourier series Parseval's identity   Let denote a piecewise-differentiable (real-valued) function on with real Fourier coefficients and complex Fourier coefficients . If exists and is finite, then    "
},
{
  "id": "example-the-basel-problem",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#example-the-basel-problem",
  "type": "Example",
  "number": "7.3.5",
  "title": "The Basel Problem.",
  "body": " The Basel Problem  Basel problem  In the early century, one of the most renowned problems in mathematics was the Basel problem, which asked for the value of Euler was the first person to show that the sum is actually and it was this solution that made him famous Or at least math famous. in the first place. We can solve this by using Parseval's identity. To do so, let for . Then with a little bit of work we can find the (real) Fourier coefficients: By Parseval's identity, it then follows that which simplifies down to In other words,   "
},
{
  "id": "section-approximation-by-trigonometric-polynomials",
  "level": "1",
  "url": "section-approximation-by-trigonometric-polynomials.html",
  "type": "Section",
  "number": "7.4",
  "title": "Approximation by Trigonometric Polynomials",
  "body": " Approximation by Trigonometric Polynomials  If a function has a Fourier series and is equal to its Fourier series, i.e., , then the partial sums of the Fourier series should be good approximations of : . Such a sum is a trigonometric polynomial of degree .  We can also consider approximating with other trigonometric polynomials of degree , say . We'd like to know how good the approximation is. To do this, we need to define a measure of error.   Square Error   Given a function of period  and approximation , we define the square error to be , assuming these are real-valued functions.    It turns out that if we are approximating by trigonometric polynomials , then the square error takes a specific form.   Square Error Formula   Let be a function of period with Fourier coefficients and , and let be a degree trigonometric polynomial. Then . The error takes this minimum value if .     Error from a Trigonometric Polynomial   Define for as in , and recall that the Fourier series is given by . Find the trigonometric polynomial of degree that best approximates and give the corresponding error.    The trigonometric polynomial of degree that best approximates is . The corresponding square error is .    Since the square error is a positive value, it follows that . This is known as Bessel's inequality . states that this inequality becomes equality if we let .   Applying Bessel's Inequality   Let . Apply Bessel's inequality to this function. What does Parseval's Identity say?    If we find the Fourier coefficients of , we get . By Bessel's inequality, we know that for any . As , Parseval's gives the identity .    "
},
{
  "id": "section-approximation-by-trigonometric-polynomials-2",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#section-approximation-by-trigonometric-polynomials-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometric polynomial of degree "
},
{
  "id": "definition-square-error",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#definition-square-error",
  "type": "Definition",
  "number": "7.4.1",
  "title": "Square Error.",
  "body": " Square Error   Given a function of period  and approximation , we define the square error to be , assuming these are real-valued functions.   "
},
{
  "id": "theorem-square-error-formula",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#theorem-square-error-formula",
  "type": "Theorem",
  "number": "7.4.2",
  "title": "Square Error Formula.",
  "body": " Square Error Formula   Let be a function of period with Fourier coefficients and , and let be a degree trigonometric polynomial. Then . The error takes this minimum value if .   "
},
{
  "id": "example-error-from-a-trigonometric-polynomial",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#example-error-from-a-trigonometric-polynomial",
  "type": "Example",
  "number": "7.4.3",
  "title": "Error from a Trigonometric Polynomial.",
  "body": " Error from a Trigonometric Polynomial   Define for as in , and recall that the Fourier series is given by . Find the trigonometric polynomial of degree that best approximates and give the corresponding error.    The trigonometric polynomial of degree that best approximates is . The corresponding square error is .   "
},
{
  "id": "section-approximation-by-trigonometric-polynomials-8",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#section-approximation-by-trigonometric-polynomials-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bessel's inequality "
},
{
  "id": "example-applying-bessel-s-inequality",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#example-applying-bessel-s-inequality",
  "type": "Example",
  "number": "7.4.4",
  "title": "Applying Bessel’s Inequality.",
  "body": " Applying Bessel's Inequality   Let . Apply Bessel's inequality to this function. What does Parseval's Identity say?    If we find the Fourier coefficients of , we get . By Bessel's inequality, we know that for any . As , Parseval's gives the identity .   "
},
{
  "id": "section-the-fourier-transform",
  "level": "1",
  "url": "section-the-fourier-transform.html",
  "type": "Section",
  "number": "7.5",
  "title": "The Fourier Transform",
  "body": " The Fourier Transform  If is a periodic function with period , then we know how to find its Fourier series, both real and complex. But what do we do if our function is not periodic? Can we still get a similar representation?  Let be some piecewise-differentiable function, not necessarily periodic. Then we can't find it's Fourier series. However, we can truncate the graph of , and replace it with a periodic function that is equal to on some interval . Then we can find the Fourier series of this function, which by is given by where So we can write wherever is continuous on .  The idea now is that the larger that gets, this expression can be used to represent for more and more values of . So we want to see what happens to this as . First, we'll clean this up a little bit by writing and , so that . Then if is in and is continuous at , then we can say As awful as this looks, we can relate this to a Riemann sum! As  , we can replace with the new variable and this expression becomes This leads to the definition of the Fourier transform . But first we need another definition.   Absolutely Integrable Functions  Absolutely Integrable Functions   Let be a piecewise continuous function. Then is absolutely integrable if      The Fourier Transform  Fourier Transform definition   Let be an absolutely integrable piecewise continuous function. The Fourier transform of is the function defined by We often write to denote the Fourier transform as well.     Fourier transform of a piecewise exponential  Let for and otherwise. Then the Fourier transform of is    As with the Laplace transform, the Fourier transform of a function is said to be in the frequency domain . In fact, the magnitude of represents the frequency content of the function (thought of as a signal) at the frequency . It's also a quick jump to get the inverse Fourier transform .   The Inverse Fourier Transform  Fourier Transform inverse transform   The inverse Fourier transform of is      Fourier Inversion Theorem  Fourier Transform inversion theorem   Let be an absolutely integrable, piecewise differentiable function. Then wherever is continuous.     Inverse Fourier transform of a step function  Define by Then we can find the inverse transform using :    The Fourier and inverse Fourier transforms are also linear like the Laplace transform: if are constants and are functions, then and The Fourier transform also works well with derivatives.   Fourier Transforms and Derivatives  Fourier Transform transforms fo derivatives   Let be differentiable with derivative . Suppose that both and are absolutely integrable. Then     Fourier transforms also behave well with another type of convolution.   Convolution Theorem  Fourier Transform convolution theorem   Suppose that are piecewise continuous, bounded and absolutely integrable. Define by Then     "
},
{
  "id": "section-the-fourier-transform-4",
  "level": "2",
  "url": "section-the-fourier-transform.html#section-the-fourier-transform-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier transform "
},
{
  "id": "definition-absolutely-integrable-functions",
  "level": "2",
  "url": "section-the-fourier-transform.html#definition-absolutely-integrable-functions",
  "type": "Definition",
  "number": "7.5.1",
  "title": "Absolutely Integrable Functions.",
  "body": " Absolutely Integrable Functions  Absolutely Integrable Functions   Let be a piecewise continuous function. Then is absolutely integrable if    "
},
{
  "id": "definition-the-fourier-transform",
  "level": "2",
  "url": "section-the-fourier-transform.html#definition-the-fourier-transform",
  "type": "Definition",
  "number": "7.5.2",
  "title": "The Fourier Transform.",
  "body": " The Fourier Transform  Fourier Transform definition   Let be an absolutely integrable piecewise continuous function. The Fourier transform of is the function defined by We often write to denote the Fourier transform as well.   "
},
{
  "id": "example-fourier-transform-of-a-piecewise-exponential",
  "level": "2",
  "url": "section-the-fourier-transform.html#example-fourier-transform-of-a-piecewise-exponential",
  "type": "Example",
  "number": "7.5.3",
  "title": "Fourier transform of a piecewise exponential.",
  "body": " Fourier transform of a piecewise exponential  Let for and otherwise. Then the Fourier transform of is   "
},
{
  "id": "section-the-fourier-transform-8",
  "level": "2",
  "url": "section-the-fourier-transform.html#section-the-fourier-transform-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "frequency domain frequency content inverse Fourier transform "
},
{
  "id": "definition-the-inverse-fourier-transform",
  "level": "2",
  "url": "section-the-fourier-transform.html#definition-the-inverse-fourier-transform",
  "type": "Definition",
  "number": "7.5.4",
  "title": "The Inverse Fourier Transform.",
  "body": " The Inverse Fourier Transform  Fourier Transform inverse transform   The inverse Fourier transform of is    "
},
{
  "id": "theorem-fourier-integral-representation",
  "level": "2",
  "url": "section-the-fourier-transform.html#theorem-fourier-integral-representation",
  "type": "Theorem",
  "number": "7.5.5",
  "title": "Fourier Inversion Theorem.",
  "body": " Fourier Inversion Theorem  Fourier Transform inversion theorem   Let be an absolutely integrable, piecewise differentiable function. Then wherever is continuous.   "
},
{
  "id": "example-inverse-fourier-transform-of-a-step-function",
  "level": "2",
  "url": "section-the-fourier-transform.html#example-inverse-fourier-transform-of-a-step-function",
  "type": "Example",
  "number": "7.5.6",
  "title": "Inverse Fourier transform of a step function.",
  "body": " Inverse Fourier transform of a step function  Define by Then we can find the inverse transform using :   "
},
{
  "id": "theorem-fourier-transforms-and-derivatives",
  "level": "2",
  "url": "section-the-fourier-transform.html#theorem-fourier-transforms-and-derivatives",
  "type": "Theorem",
  "number": "7.5.7",
  "title": "Fourier Transforms and Derivatives.",
  "body": " Fourier Transforms and Derivatives  Fourier Transform transforms fo derivatives   Let be differentiable with derivative . Suppose that both and are absolutely integrable. Then    "
},
{
  "id": "theorem-convolution-theorem",
  "level": "2",
  "url": "section-the-fourier-transform.html#theorem-convolution-theorem",
  "type": "Theorem",
  "number": "7.5.8",
  "title": "Convolution Theorem.",
  "body": " Convolution Theorem  Fourier Transform convolution theorem   Suppose that are piecewise continuous, bounded and absolutely integrable. Define by Then    "
},
{
  "id": "section-basic-concepts",
  "level": "1",
  "url": "section-basic-concepts.html",
  "type": "Section",
  "number": "8.1",
  "title": "Basic Concepts",
  "body": " Basic Concepts   Partial derivatives and PDEs  Given some quantity that depends solely on the variable , represents the rate of change of with respect to . More generally, given some quantity that depends on , we can attempt to find the rate of change of with respect to each of the variables . This idea leads to partial derivatives .   Partial derivatives  Partial derivatives   Let denote a function depending on the variables . Then the partial derivative of with respect to is found by differentiating while treating as a constant. The partial derivative of with respect to is denoted by The partial derivative of with respect to is found similarly, and is likewise denoted by     From here we can define higher order partial derivatives, such as or The order of each of these partial derivatives is and , respectively.   Partial differential equations Definition  Partial differential equation   A partial differential equation (PDE) is an equation involving one or more (partial) derivatives of an unknown function that depends on two or more independent variables, usually thought of as time and position. The highest derivative appearing in a PDE is called the order of the PDE.    Just as ODEs in practice typically appear as initial value problems, PDEs can appear as boundary value problems . Boundary value problems involve conditions of the form These are examples of boundary conditions . In other words, boundary conditions can represent initial data at infinitely many points, as opposed to finitely many points like we had for our IVPs.    Linear homogeneous PDEs and the superposition principle  We will mostly be concerned with linear PDEs , which are PDEs where the only thing we're allowed to do to the function and its derivatives is multiply it by a constant. A linear PDE is homogeneous if every term contains the function or one of its derivatives. A solution of a PDE is a function that satisfies the PDE.   Solution of the heat equation   Let . Show that this is a solution of the boundary value problem     To do so, we need to compute the partial derivatives of   . So we see that , which means that is a solution of . Now it remains to show that satisfies the boundary conditions, which we can do without too much trouble.    Just as with linear homogeneous ODEs, PDEs that are linear and homogeneous satisfy the superposition principle .   Superposition principle partial differential equations  Superposition principle   Let and denote arbitrary constants, and suppose that and are both solutions of the same linear homogeneous PDE. Then is also a solution of the same PDE.    The superposition principle is incredibly useful since it allows us to find general solutions of PDEs, which makes solving linear homogeneous PDEs somewhat tractable. If a PDE fails to be linear or homogeneous, the superposition principle is not guaranteed to hold.   Failure of the superposition principle   Consider the PDE given by This PDE fails to be linear because the second term involves multiplying with its derivative . However, it's not too hard to check that is a solution of the PDE, since if we plug this function into the PDE we get . However, the closely related function is not a solution of the same PDE, since So the superposition principle does not hold for this PDE.      Important PDEs  As mentioned in the introduction, PDEs are useful for modeling quantities that depend on multiple independent variables. We finish this section by listing several of the simplest and most studied PDEs.   where . This is called the heat or diffusion equation . This equation is used for modeling the spread of a quantity, such as how temperature diffuses along a rod.  where . This is called the wave equation , and is used for modeling vibrating motion, such as that along a plucked string.   In both PDEs above, the expression is an example of the Laplacian of . The Laplacian of a function at a point is a measure of how differs from the average value of at nearby . In particular, the Laplacian is positive at if tends to be less than nearby averages; the Laplacian is negative at if tends to be greater than nearby averages; and the Laplacian at is if is in equilibrium with its nearby averages.  With this viewpoint, we can assign physical reasoning to the heat and wave equations:   The heat equation states that the time rate of change of the temperature is proportional to the difference between the temperature at and the average values of nearby temperatures. If the nearby average temperature is greater (i.e., the Laplacian is positive), then the temperature will increase.    The wave equation states that the acceleration of the wave height is proportional to the difference between the height of the wave at and the average height at nearby points. If the nearby average height is greater (i.e., the Laplacian is positive), then the wave height will accelerate upwards.     Our goal in the next section will be to determine how to solve PDEs such as these.   "
},
{
  "id": "subsection-partial-derivatives-and-pdes-2",
  "level": "2",
  "url": "section-basic-concepts.html#subsection-partial-derivatives-and-pdes-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial derivatives "
},
{
  "id": "definition-partial-derivatives",
  "level": "2",
  "url": "section-basic-concepts.html#definition-partial-derivatives",
  "type": "Definition",
  "number": "8.1.1",
  "title": "Partial derivatives.",
  "body": " Partial derivatives  Partial derivatives   Let denote a function depending on the variables . Then the partial derivative of with respect to is found by differentiating while treating as a constant. The partial derivative of with respect to is denoted by The partial derivative of with respect to is found similarly, and is likewise denoted by    "
},
{
  "id": "subsection-partial-derivatives-and-pdes-4",
  "level": "2",
  "url": "section-basic-concepts.html#subsection-partial-derivatives-and-pdes-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "definition-partial-differential-equation",
  "level": "2",
  "url": "section-basic-concepts.html#definition-partial-differential-equation",
  "type": "Definition",
  "number": "8.1.2",
  "title": "Partial differential equation.",
  "body": " Partial differential equations Definition  Partial differential equation   A partial differential equation (PDE) is an equation involving one or more (partial) derivatives of an unknown function that depends on two or more independent variables, usually thought of as time and position. The highest derivative appearing in a PDE is called the order of the PDE.   "
},
{
  "id": "subsection-partial-derivatives-and-pdes-6",
  "level": "2",
  "url": "section-basic-concepts.html#subsection-partial-derivatives-and-pdes-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boundary value problems boundary conditions "
},
{
  "id": "subsection-linear-homogeneous-pdes-and-the-superposition-principle-2",
  "level": "2",
  "url": "section-basic-concepts.html#subsection-linear-homogeneous-pdes-and-the-superposition-principle-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear PDEs homogeneous solution "
},
{
  "id": "example-solution-of-the-heat-equation",
  "level": "2",
  "url": "section-basic-concepts.html#example-solution-of-the-heat-equation",
  "type": "Example",
  "number": "8.1.3",
  "title": "Solution of the heat equation.",
  "body": " Solution of the heat equation   Let . Show that this is a solution of the boundary value problem     To do so, we need to compute the partial derivatives of   . So we see that , which means that is a solution of . Now it remains to show that satisfies the boundary conditions, which we can do without too much trouble.   "
},
{
  "id": "subsection-linear-homogeneous-pdes-and-the-superposition-principle-4",
  "level": "2",
  "url": "section-basic-concepts.html#subsection-linear-homogeneous-pdes-and-the-superposition-principle-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "superposition principle "
},
{
  "id": "principle-superposition-principle",
  "level": "2",
  "url": "section-basic-concepts.html#principle-superposition-principle",
  "type": "Principle",
  "number": "8.1.4",
  "title": "Superposition principle.",
  "body": " Superposition principle partial differential equations  Superposition principle   Let and denote arbitrary constants, and suppose that and are both solutions of the same linear homogeneous PDE. Then is also a solution of the same PDE.   "
},
{
  "id": "example-failure-of-the-superposition-principle",
  "level": "2",
  "url": "section-basic-concepts.html#example-failure-of-the-superposition-principle",
  "type": "Example",
  "number": "8.1.5",
  "title": "Failure of the superposition principle.",
  "body": " Failure of the superposition principle   Consider the PDE given by This PDE fails to be linear because the second term involves multiplying with its derivative . However, it's not too hard to check that is a solution of the PDE, since if we plug this function into the PDE we get . However, the closely related function is not a solution of the same PDE, since So the superposition principle does not hold for this PDE.   "
},
{
  "id": "subsection-important-pdes-4",
  "level": "2",
  "url": "section-basic-concepts.html#subsection-important-pdes-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laplacian "
},
{
  "id": "section-wave-equation-and-separation-of-variables",
  "level": "1",
  "url": "section-wave-equation-and-separation-of-variables.html",
  "type": "Section",
  "number": "8.2",
  "title": "The Wave Equation and Separation of Variables",
  "body": " The Wave Equation and Separation of Variables  The main difficulty in solving PDEs (even linear ones) as compared with ODEs is that any solution of a PDE typically depends on more than one variable. Adding this extra degree of freedom into the problem greatly complicates matters. However, we can make this problem more reasonable by assuming that our solution depends on each variable separately . That is, we'll assume that the function we want to find, satisfies the constraint . This technique is known as separation of variables .  Consider a one-dimensional string of length that vibrates in the vertical direction. The vertical displacement of such a string depends on the horizontal position along the string, , and the time . So let denote the vertical displacement of the string at position and at time . If we assume that the string has constant density and that the force of gravity of the string is negligible, then satisfies the wave equation for some constant .  Suppose that the string is also subject to the boundary conditions   . In other words, the string is held fixed at both ends. We'll also suppose that we know the initial position of the string and the initial velocity of the string, represented by the initial conditions   . Our goal will be to find subject to these conditions. To start, assume that If we plug this into , then we get   If we assume that are both nonzero, then we can rewrite this to get This may not look that helpful, but it actually places some serious restrictions on and . The left hand side of this equation only depends on whereas the right hand side depends only on . So the only way for this equation to be true for all  is if both sides are constant: for some . This now gives us two separate ordinary differential equations for and :  . We can add a few more restrictions to these ODEs to help us solve them. Note that the boundary conditions force either or for all , which leads to . So to avoid this trivial solution, we'll set .  We'll solve first since we have extra information to use. So to start, suppose that and write for some nonzero . Then becomes and has solution given by   Now, forces , so we get . However, since as well, we get . But the only way to solve this is to set since only if . So in other words, if we assume that , then the only way to solve is to set , which also forces . Obviously, this isn't very useful. Similarly, if we assume that then we get the same problem. So let's assume that for some nonzero . Then becomes , which has solution   The condition forces , and the second boundary condition forces . We want to avoid setting equal to since this would give us again, so we'll set instead. This tells us that for some integer , or just . So nontrivial solutions of that satisfy the boundary conditions can occur only if where and . For each choice of (ignoring sign), we get the solution .  Now we move on to solving , but we still need to keep the condition for . If we do so, then becomes , which has solutions given by where .  So this means that every function of the form is a solution of subject to the boundary conditions . It also follows from the superposition principle that any (finite) linear combination of these functions will give another solution that satisfies the boundary conditions.  However, this does not guarantee that we can solve for the initial conditions in . To give ourselves as general a solution as possible, we will guess that the solution to the wave equation is actually a linear combination of all possible . That is, we'll say that   Now we'll use the initial conditions to actually determine . To start, note that we must have  This is a Fourier series , and in particular it's the Fourier series of the odd extension of with period . See . So it follows that   Similarly, we must have This is the Fourier series for the odd extension of with period . Therefore or just   We can put all of this together into the following theorem.   Wave equation solution  Solution of the Wave Equation   The solution of the wave equation with boundary conditions and initial conditions is given by where and for .     A string with fixed ends   A string at rest has unit length, and is fixed at both ends. Suppose that the string is now stretched into the triangular shape given by the graph of The string is then released at time . Given , find the function that models the vertical displacement of the string at position at time .    We can model as the solution of the wave equation with boundary conditions and initial conditions We can find from .  Using the Sage cell below, we get and since this forces as well. Hence the solution is      "
},
{
  "id": "section-wave-equation-and-separation-of-variables-2",
  "level": "2",
  "url": "section-wave-equation-and-separation-of-variables.html#section-wave-equation-and-separation-of-variables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separation of variables "
},
{
  "id": "section-wave-equation-and-separation-of-variables-4",
  "level": "2",
  "url": "section-wave-equation-and-separation-of-variables.html#section-wave-equation-and-separation-of-variables-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boundary conditions "
},
{
  "id": "section-wave-equation-and-separation-of-variables-6",
  "level": "2",
  "url": "section-wave-equation-and-separation-of-variables.html#section-wave-equation-and-separation-of-variables-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial conditions "
},
{
  "id": "theorem-solution-of-the-wave-equation",
  "level": "2",
  "url": "section-wave-equation-and-separation-of-variables.html#theorem-solution-of-the-wave-equation",
  "type": "Theorem",
  "number": "8.2.1",
  "title": "Solution of the Wave Equation.",
  "body": " Wave equation solution  Solution of the Wave Equation   The solution of the wave equation with boundary conditions and initial conditions is given by where and for .   "
},
{
  "id": "example-a-string-with-fixed-ends",
  "level": "2",
  "url": "section-wave-equation-and-separation-of-variables.html#example-a-string-with-fixed-ends",
  "type": "Example",
  "number": "8.2.2",
  "title": "A string with fixed ends.",
  "body": " A string with fixed ends   A string at rest has unit length, and is fixed at both ends. Suppose that the string is now stretched into the triangular shape given by the graph of The string is then released at time . Given , find the function that models the vertical displacement of the string at position at time .    We can model as the solution of the wave equation with boundary conditions and initial conditions We can find from .  Using the Sage cell below, we get and since this forces as well. Hence the solution is    "
},
{
  "id": "section-d-alembert-s-solution-of-the-wave-equation",
  "level": "1",
  "url": "section-d-alembert-s-solution-of-the-wave-equation.html",
  "type": "Section",
  "number": "8.3",
  "title": "d’Alembert’s Solution of the Wave Equation",
  "body": " d'Alembert's Solution of the Wave Equation  Although solves the wave equation, it's a little complicated to work with. We'll try to express the solution in a simpler way. In particular, we'll start by trying to simplify the solution of the boundary value problem in . In that example, we saw that the solution of with boundary conditions and initial conditions was given by where was the Fourier coefficient of the odd extension of .  If we look at this, it looks kind of like a Fourier series except that we have a product of sine and cosine. We can make this look more like a Fourier series by using one of the product-to-sum formulas from trigonometry:   Using this formula, we get which means we can write the solution as   Here's how this helps us. Since is the Fourier coefficient of the odd extension of , each of these sums must be a Fourier series for the odd extension of ! In particular, if we denote the odd extension by then we can simply say that   We can extend this to other boundary value problems without an initial velocity component.   d'Alembert's Solution without Initial Velocity  Wave equation d'Alembert's solution zero initial velocity   Let , and consider the boundary value problem  . Assuming that is piecewise twice differentiable, then the solution of this boundary value problem is given by where denotes the odd extension of .     Boundary value problem with sinusoidal deflection   A string of length has initial deflection, or position, given by for . The string is released at time . Suppose . Find .    We can do so very easily with , since the initial velocity of the string is . So we have where is the odd extension of . However, since is itself an odd function, it follows that the odd extension is simply . Therefore the solution is     d'Alembert's solution is very useful if we want to model a vibrating string with zero initial velocity. But what can we do if the string has an initial velocity? d'Alembert's solution actually suggests a possible approach to take. If we look at , it essentially states that the solution of the wave equation (assuming zero initial velocity) is the superposition of the rightward traveling wave with the leftward traveling wave . This suggests that superpositions of waves are fundamental to solutions of the wave equation.  We'll try something similar for the case . We'll assume that adding in this initial velocity also adds in a new rightward traveling wave and a new leftward traveling wave into our solution , so that we have   Now we'll try to use the initial conditions to find and . Now, since we need this forces   Therefore our solution becomes If we use the second initial condition then we get   Now we can integrate both sides to find ! So there exists some such that Therefore . This gives the following adjustment to d'Alembert's solution.   d'Alembert's Solution with Initial Velocity  Wave equation d'Alembert's solution with initial velocity   Let , and consider the boundary value problem   Assuming that is piecewise twice differentiable and that is piecewise continuous, then the solution of this boundary value problem is given by where denotes the odd extension of and the odd extension of .     Boundary value problem with sinusoidal deflection and initial velocity   Consider a string of length , initial deflection and initial velocity . Assume that . Find , the vertical displacement at .    The vertical displacement of the string is given by  .   "
},
{
  "id": "theorem-d-alembert-s-solution-without-initial-velocity",
  "level": "2",
  "url": "section-d-alembert-s-solution-of-the-wave-equation.html#theorem-d-alembert-s-solution-without-initial-velocity",
  "type": "Theorem",
  "number": "8.3.1",
  "title": "d’Alembert’s Solution without Initial Velocity.",
  "body": " d'Alembert's Solution without Initial Velocity  Wave equation d'Alembert's solution zero initial velocity   Let , and consider the boundary value problem  . Assuming that is piecewise twice differentiable, then the solution of this boundary value problem is given by where denotes the odd extension of .   "
},
{
  "id": "example-boundary-value-problem-with-sinusoidal-deflection",
  "level": "2",
  "url": "section-d-alembert-s-solution-of-the-wave-equation.html#example-boundary-value-problem-with-sinusoidal-deflection",
  "type": "Example",
  "number": "8.3.2",
  "title": "Boundary value problem with sinusoidal deflection.",
  "body": " Boundary value problem with sinusoidal deflection   A string of length has initial deflection, or position, given by for . The string is released at time . Suppose . Find .    We can do so very easily with , since the initial velocity of the string is . So we have where is the odd extension of . However, since is itself an odd function, it follows that the odd extension is simply . Therefore the solution is    "
},
{
  "id": "theorem-d-alembert-s-solution-with-initial-velocity",
  "level": "2",
  "url": "section-d-alembert-s-solution-of-the-wave-equation.html#theorem-d-alembert-s-solution-with-initial-velocity",
  "type": "Theorem",
  "number": "8.3.3",
  "title": "d’Alembert’s Solution with Initial Velocity.",
  "body": " d'Alembert's Solution with Initial Velocity  Wave equation d'Alembert's solution with initial velocity   Let , and consider the boundary value problem   Assuming that is piecewise twice differentiable and that is piecewise continuous, then the solution of this boundary value problem is given by where denotes the odd extension of and the odd extension of .   "
},
{
  "id": "example-boundary-value-problem-with-sinusoidal-deflection-and-initial-velocity",
  "level": "2",
  "url": "section-d-alembert-s-solution-of-the-wave-equation.html#example-boundary-value-problem-with-sinusoidal-deflection-and-initial-velocity",
  "type": "Example",
  "number": "8.3.4",
  "title": "Boundary value problem with sinusoidal deflection and initial velocity.",
  "body": " Boundary value problem with sinusoidal deflection and initial velocity   Consider a string of length , initial deflection and initial velocity . Assume that . Find , the vertical displacement at .    The vertical displacement of the string is given by  .  "
},
{
  "id": "section-the-heat-equation",
  "level": "1",
  "url": "section-the-heat-equation.html",
  "type": "Section",
  "number": "8.4",
  "title": "The Heat Equation",
  "body": " The Heat Equation   The last equation we will look at is the heat equation , which models the temperature distribution of a thin bar of uniform density and constant cross-section placed along the -axis. We also assume that the bar is perfectly insulated on its surface, so that heat flows along the bar in the -direction only. With these assumptions, the temperature of the bar at position and time satisfies the PDE  . This is called the one-dimensional heat equation .    Bar with ends fixed at  We will start by solving the heat equation for the case where the bar has ends which are fixed at temperature . If we're given an initial temperature distribution , then is the solution of the boundary value problem  . We can solve this boundary value problem using separation of variables, much as we did in . So to start, we assume that . If we plug this into the heat equation , then we get   Now we have three separate cases to consider for : or . Just as with the wave equation, the only case that doesn't lead to trivial solutions is . In this case leads to the two ODEs given by  . The boundary conditions in force , and the only nontrivial solutions of occur when . So we get the solutions , just as with the wave equation.  For the second ODE, we readily solve it to obtain where as before. So every function is a solution of that satisfies the boundary equations . In order to satisfy the arbitrary initial condition , we take an infinite sum of the functions to get   Finally, if we plug in and use the initial condition , we get . This is just the Fourier series of the odd extension of , which lets us find . We summarize all of this in the following theorem.   Heat equation fixed ends  Solution of the Heat Equation with Fixed Temperature   The solution of the heat equation satisfying the boundary conditions and initial condition is given by where      Sinusoidal initial temperature   Consider a thin metal bar of length placed on the -axis, with one end at and the other at . Assuming that and that the initial temperature is for , find the temperature distribution using .    The temperature is the function given by where is the coefficient of the Fourier series of the odd extension of . The odd extension of is . Furthermore, the Fourier series of is clearly just .  So in other words, Hence      "
},
{
  "id": "section-the-heat-equation-2-1",
  "level": "2",
  "url": "section-the-heat-equation.html#section-the-heat-equation-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "heat equation "
},
{
  "id": "section-the-heat-equation-2-3",
  "level": "2",
  "url": "section-the-heat-equation.html#section-the-heat-equation-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-dimensional heat equation "
},
{
  "id": "theorem-solution-of-the-heat-equation-with-fixed-temperature",
  "level": "2",
  "url": "section-the-heat-equation.html#theorem-solution-of-the-heat-equation-with-fixed-temperature",
  "type": "Theorem",
  "number": "8.4.1",
  "title": "Solution of the Heat Equation with Fixed Temperature.",
  "body": " Heat equation fixed ends  Solution of the Heat Equation with Fixed Temperature   The solution of the heat equation satisfying the boundary conditions and initial condition is given by where    "
},
{
  "id": "example-sinusoidal-initial-temperature",
  "level": "2",
  "url": "section-the-heat-equation.html#example-sinusoidal-initial-temperature",
  "type": "Example",
  "number": "8.4.2",
  "title": "Sinusoidal initial temperature.",
  "body": " Sinusoidal initial temperature   Consider a thin metal bar of length placed on the -axis, with one end at and the other at . Assuming that and that the initial temperature is for , find the temperature distribution using .    The temperature is the function given by where is the coefficient of the Fourier series of the odd extension of . The odd extension of is . Furthermore, the Fourier series of is clearly just .  So in other words, Hence    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation  The following table defines some of the notation used in this book. Page numbers or references refer to the first appearance of each symbol.   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Appendix",
  "number": "B",
  "title": "Table of Laplace Transforms",
  "body": " Table of Laplace Transforms   Table of Common Laplace Transforms                     ,                                                                                                 "
},
{
  "id": "table-laplace-transforms",
  "level": "2",
  "url": "backmatter-3.html#table-laplace-transforms",
  "type": "Table",
  "number": "B.0.1",
  "title": "Table of Common Laplace Transforms",
  "body": " Table of Common Laplace Transforms                     ,                                                                                                "
},
{
  "id": "appendix-gfdl",
  "level": "1",
  "url": "appendix-gfdl.html",
  "type": "Appendix",
  "number": "C",
  "title": "GNU Free Documentation License",
  "body": " GNU Free Documentation License  Version 1.3, 3 November 2008  Copyright copyright 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc. < >  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.   0. PREAMBLE  The purpose of this License is to make a manual, textbook, or other functional and useful document free in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others.  This License is a kind of copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software.  We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference.    1. APPLICABILITY AND DEFINITIONS  This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law.  A Modified Version of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language.  A Secondary Section is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document's overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them.  The Invariant Sections are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none.  The Cover Texts are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words.  A Transparent copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not Transparent is called Opaque .  Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only.  The Title Page means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such, Title Page means the text near the most prominent appearance of the work's title, preceding the beginning of the body of the text.  The publisher means any person or entity that distributes copies of the Document to the public.  A section Entitled XYZ means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as Acknowledgements , Dedications , Endorsements , or History .) To Preserve the Title of such a section when you modify the Document means that it remains a section Entitled XYZ according to this definition.  The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License.    2. VERBATIM COPYING  You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3.  You may also lend copies, under the same conditions stated above, and you may publicly display copies.    3. COPYING IN QUANTITY  If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document's license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects.  If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages.  If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public.  It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document.    4. MODIFICATIONS  You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version:   Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission.  List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement.  State on the Title page the name of the publisher of the Modified Version, as the publisher.  Preserve all the copyright notices of the Document.  Add an appropriate copyright notice for your modifications adjacent to the other copyright notices.  Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below.  Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document's license notice.  Include an unaltered copy of this License.  Preserve the section Entitled History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled History in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence.  Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on. These may be placed in the History section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission.  For any section Entitled Acknowledgements or Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein.  Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles.  Delete any section Entitled Endorsements . Such a section may not be included in the Modified Version.  Do not retitle any existing section to be Entitled Endorsements or to conflict in title with any Invariant Section.  Preserve any Warranty Disclaimers.   If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version's license notice. These titles must be distinct from any other section titles.  You may add a section Entitled Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard.  You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one.  The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version.    5. COMBINING DOCUMENTS  You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers.  The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work.  In the combination, you must combine any sections Entitled History in the various original documents, forming one section Entitled History ; likewise combine any sections Entitled Acknowledgements , and any sections Entitled Dedications . You must delete all sections Entitled Endorsements .    6. COLLECTIONS OF DOCUMENTS  You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects.  You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document.    7. AGGREGATION WITH INDEPENDENT WORKS  A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an aggregate if the copyright resulting from the compilation is not used to limit the legal rights of the compilation's users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document.  If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document's Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate.    8. TRANSLATION  Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail.  If a section in the Document is Entitled Acknowledgements , Dedications , or History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title.    9. TERMINATION  You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License.  However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.  Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.  Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it.    10. FUTURE REVISIONS OF THIS LICENSE  The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See .  Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License or any later version applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Document.    11. RELICENSING  Massive Multiauthor Collaboration Site (or MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A Massive Multiauthor Collaboration (or MMC ) contained in the site means any set of copyrightable works thus published on the MMC site.  CC-BY-SA means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization.  Incorporate means to publish or republish a Document, in whole or in part, as part of another Document.  An MMC is eligible for relicensing if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008.  The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing.    ADDENDUM: How to use this License for your documents  To use this License in a document you have written, include a copy of the License in the document and put the following copyright and license notices just after the title page:  Copyright (C) YEAR YOUR NAME. Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled \"GNU Free Documentation License\".  If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the with Texts. line with this:  with the Invariant Sections being LIST THEIR TITLES, with the Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.  If you have Invariant Sections without Cover Texts, or some other combination of the three, merge those two alternatives to suit the situation.  If your document contains nontrivial examples of program code, we recommend releasing these examples in parallel under your choice of free software license, such as the GNU General Public License, to permit their use in free software.   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "  "
},
{
  "id": "backmatter-6",
  "level": "1",
  "url": "backmatter-6.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
