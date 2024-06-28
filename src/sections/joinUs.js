import React from "react";
import { Formik, Form, Field, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "components/form/input";
import Error from "components/form/error";
import { Box, Button, Image, Container, Grid, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import { Input as ThemeInput } from "theme-ui";
import upload from "assets/images/icons/upload.webp";
import bg from "assets/images/aboutUs/cardbg.png";
import blob from "assets/images/blobMesh.svg";
import email from "assets/images/contact/email.svg";
import phone from "assets/images/contact/phone.svg";
import location from "assets/images/contact/location.svg";

const widgets = [
  {
    id: 2,
    link: "https://www.google.com/maps/@43.7055236,7.2649924,3a,53.558361y,121.366310h,108.017059t/data=!3m4!1e1!3m2!1scNiCbbPLOj2VnMFKAUk2LQ!2e0?lucs=,47071704&g_ep=CAISDDYuOTIuMC4yNDI0MBgAIIGBASoJLDQ3MDcxNzA0QgJGUg%3D%3D&g_st=iw",
    iconSrc: <Image src={location} alt="maps" />,
    altText: "maps",
    title: "68 avenue Jean Medecin",
  },

  {
    id: 4,
    link: "mailto:contact@void.fr",
    iconSrc: <Image src={email} alt="email icon" />,
    altText: "email",
    title: (
      <div>
        <p>contact@void.fr</p>
      </div>
    ),
  },
  {
    id: 4,
    link: "tel:04.97.13.02.60",
    iconSrc: <Image src={phone} alt="phone icon" />,
    altText: "phone",
    title: <p>04.97.13.02.60</p>,
  },
];

const JoinUs = () => {
  const MAX_FILE_SIZE = 3145728;

  const validFileExtensions = {
    image: [
      "jpg",
      "gif",
      "png",
      "jpeg",
      "pdf",
      "webp",
      "pdf",
      "docx",
      "rtf",
      "heic",
      "text",
    ],
  };

  function isValidFileType(fileName, fileType) {
    return (
      fileName &&
      validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
    );
  }
  return (
    <Box as="section" sx={styles.section} id="join-us">
      <Container sx={styles.container}>
        <SectionHeading title="Informations de contact" />
        <Grid sx={styles.widgets}>
          {widgets.map((item) => (
            <a key={item.id} sx={styles.widgets.link} href={item.link}>
              <Box sx={styles.widgets.widgetItem}>
                <span sx={styles.widgets.img}>{item.iconSrc}</span>
                <Box sx={styles.widgets.infoWrapper}>
                  <Text as="p">{item.title}</Text>
                </Box>
              </Box>
            </a>
          ))}
        </Grid>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
            phone: "",
            resume: "",
            success: false,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required."),
            phone: Yup.number("")
              .required("Phone number is required.")
              .typeError("Phone Must be a Number"),

            email: Yup.string()
              .email("Invalid email")
              .required("Email is required."),
            message: Yup.string().required("Message is required."),
            resume: Yup.mixed()
              .required("Resume is Required")
              .test("is-valid-type", "This is not a valid file type", (value) =>
                isValidFileType(value && value.name.toLowerCase(), "image")
              )
              .test(
                "is-valid-size",
                "Max allowed size is 3 Megabytes",
                (value) => value && value.size <= MAX_FILE_SIZE
              ),
          })}
          onSubmit={async (
            { name, email, resume, message, phone },
            { setSubmitting, resetForm, setFieldValue }
          ) => {
            try {
              const data = JSON.stringify({
                name,
                email,
                resume,
                message,
                phone,
              });
              const config = {
                // "Content-Type": "application/json",
                "content-type": "multipart/form-data",
                // "content-type": resume.type,
                // "content-length": `${resume.size}`,
              };
              const formData = new FormData();
              formData.append("name", name);
              formData.append("email", email);
              formData.append("message", message);
              formData.append("phone", phone);
              formData.append("resume", resume);

              fetch(
                "https://getform.io/f/da57ad02-6ffa-4f12-9364-4b5a1d9f63fb",
                {
                  method: "POST",
                  body: formData,
                  headers: {
                    Accept: "multipart/form-data",
                  },
                }
              )
                .then((response) => console.log(response))
                .catch((error) => console.log(error));

              setSubmitting(false);
              setFieldValue("success", true);
              setTimeout(() => {
                resetForm();
                setFieldValue("resume", "");
              }, 1000);
            } catch (err) {
              setSubmitting(false);
              setFieldValue("success", false);
              alert(`Something went wrong, please try again ${err}`); // eslint-disable-line
            }
          }}
        >
          {({ values, touched, errors, setFieldValue, isSubmitting }) => {
            return (
              <Form>
                <Box sx={styles.inputField}>
                  <Input
                    as={FastField}
                    type="text"
                    name="name"
                    component="input"
                    aria-label="name"
                    placeholder="Name*"
                    error={touched.name && errors.name}
                  />
                  <ErrorMessage component={Error} name="name" />
                </Box>

                <Box sx={styles.inputField}>
                  <Input
                    as={FastField}
                    type="text"
                    name="phone"
                    component="input"
                    aria-label="phone"
                    placeholder="Phone number*"
                    error={touched.phone && errors.phone}
                  />
                  <ErrorMessage component={Error} name="phone" />
                </Box>
                <Box sx={styles.inputField}>
                  <Input
                    id="email"
                    aria-label="email"
                    component="input"
                    as={FastField}
                    type="email"
                    name="email"
                    placeholder="Email*"
                    error={touched.email && errors.email}
                  />
                  <ErrorMessage component={Error} name="email" />
                </Box>

                <Box sx={styles.inputField}>
                  <Field
                    as="textarea"
                    className={`${
                      touched.message && errors.message
                        ? "text__area error"
                        : "text__area"
                    }`}
                    aria-label="message"
                    id="message"
                    rows="8"
                    name="message"
                    placeholder="How can we help you today ? *"
                    error={touched.message && errors.message}
                  />
                  <ErrorMessage component={Error} name="message" />
                </Box>
                <input
                  type="hidden"
                  name="_gotcha"
                  style={{ display: "none !important" }}
                />
                <Box sx={[styles.inputField]}>
                  <ThemeInput
                    id="resume"
                    aria-label="resume"
                    component="input"
                    type="file"
                    // as={FastField}
                    name="resume"
                    // value={values.resume}
                    onChange={(event) => {
                      setFieldValue("resume", event.currentTarget.files[0]);
                    }}
                    placeholder="Resume*"
                    error={touched.resume && errors.resume}
                    sx={
                      touched.resume && errors.resume
                        ? styles.error
                        : styles.fileUpload
                    }
                  />
                  <ErrorMessage component={Error} name="resume" />
                </Box>

                {values.success && (
                  <Box sx={styles.inputField}>
                    <Box sx={styles.center}>
                      <h4>
                        Your message has been successfully sent, I will get back
                        to you ASAP!
                      </h4>
                    </Box>
                  </Box>
                )}
                <Box sx={styles.buttonWrapper}>
                  <Button
                    sx={styles.button}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "isSubmiting ..." : "submit"}
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </Box>
  );
};

const styles = {
  section: {
    pt: [120, null, null, null, 160, 160],
    pb: [120, null, null, null, 160, 160],
    background: `url(${bg}) no-repeat center center`,
    backgroundSize: "contain",
  },
  widgets: {
    px: [4, 0, 3, null, 7, 10],
    width: ["100%", "100%"],
    mx: "auto",
    gridGap: ["30px 10px", "20px 20px"],
    gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"],
    a: {
      textDecoration: "none",
      color: "text",
      width: "100%",
    },
    mt: "0px",

    mb: ["40px", "80px"],

    img: {
      width: ["40px", "60px"],
      height: ["40px", "60px"],
      objectFit: "contain",
      mx: "auto",
    },
    widgetItem: {
      textAlign: "center",
      // mb: ["20px", "20px", "auto"],
    },
    infoWrapper: {
      mt: [2, 2, null, 2, 3],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: "heading_secondary",
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, "15px"],
      },
      "& a": {
        textDecoration: "none",
        color: "text",
      },

      p: {
        fontSize: [1, "15px"],
        fontWeight: 500,
        lineHeight: 1.6,
        color: "heading_secondary",
      },
    },
  },
  container: {
    width: ["100%", "95%", "80%", "70%", "60%"],
    maxWidth: "700px !important",
    h3: {
      color: "primary",
    },
  },
  inputField: {
    position: "relative",
    marginBottom: "1rem",
    ".error": {
      borderColor: "  #ff4136 !important",
      outlineColor: "#ff4136 !important ",
      borderWidth: "2px !important",
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    },
    ".text__area": {
      width: " 100%",
      borderRadius: "7px",
      marginBottom: "0.5rem",
      transition: "0.3s",
      color: "text",
      backdropFilter: "blur(16px) saturate(180%)",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      border: "1px solid rgba(000, 000, 000, 0.5)",
      p: ["20px !important ", "30px"],
      transition: "0.3s",
      outlineColor: "accent",
      fontSize: ["12px", "16px"],
      "&:focus": {
        borderColor: "primary",
        outline: "primary 2px solid",
        boxShadow: "0 0 0 2px primary",
      },
      "&:placeholder": {
        color: "#a7a7a7",
      },
      "&:focus": {
        "&:focus": {
          borderColor: "primary",
          boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
          // outline: "none",
        },
      },
      "&:placeholder-shown": {
        fontSize: 2,
      },
    },
  },
  buttonWrapper: {
    "@media screen and (max-width: 640px)": {
      textAlign: "center",
    },
    button: {
      mt: 30,
      display: "block",
      textDecoration: "none",
      color: "white",
      fontSize: ["16px", null, null, 2],
      letterSpacings: "-0.15px",
      lineHeight: 1.2,
      fontWeight: 500,
      letterSpacings: "-0.15px",
      "@media screen and (max-width: 640px)": {
        width: "100%",
        mx: "auto",
      },
    },
  },
  fileUpload: {
    // padding: "5px",
    backdropFilter: "blur(16px) saturate(180%)",
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(000, 000, 000, 0.5)",
    borderRadius: "7px",
    marginBottom: "0.5rem",
    transition: "0.3s",
    color: "black",
    backgroundImage: `url(${upload})`,
    backgroundPosition: "right",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    animation: `all ease-out infinite  6000ms `,
    cursor: "pointer",
    "&:autofill": {
      color: "white !important ",
    },
    "&:hover": {
      backgroundColor: "#e4e9fa66",
    },
    "&:placeholder": {
      color: "#a7a7a7",
    },
    "&::file-selector-button": {
      marginRight: "20px",
      border: "none",
      background: "transparent",
      padding: "10px 20px",
      borderRadius: "10px",
      color: "#a7a7a7",
      fontSize: "bold",
      cursor: "pointer",
      transition: "background .2s ease-in-out",
    },

    "&::file-selector-button:hover": {
      background: "transparent",
    },
  },
  error: {
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(000, 000, 000, 0.5)",
    borderRadius: "7px",
    marginBottom: "0.5rem",
    transition: "0.3s",
    color: "text",
    backgroundImage: `url(${upload})`,
    backgroundPosition: "right",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    "&:autofill": {
      color: "white !important ",
    },

    "&:placeholder": {
      color: "#a7a7a7",
    },
    "&::file-selector-button": {
      marginRight: "20px",
      border: "none",
      background: "transparent",
      padding: "10px 20px",
      borderRadius: "10px",
      color: "#000",
      cursor: "pointer",
      transition: "background .2s ease-in-out",
    },

    "&::file-selector-button:hover": {
      background: "transparent",
    },
    borderColor: "  #ff4136 !important",
    outlineColor: "#ff4136 !important ",
    borderWidth: "2px !important",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },
};

export default JoinUs;
