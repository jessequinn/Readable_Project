import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

// material-ui
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

// https://github.com/TeamWertarbyte/mdi-material-ui
// https://materialdesignicons.com
import { TooltipEdit } from "mdi-material-ui";

// actions
import { putEditComment } from "../actions";

// styles
import styles from "../styles";

function getModalStyle() {
  const top = "50";
  const left = "50";

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    margin: "auto"
  };
}

const validate = values => {
  const errors = {};
  const requiredFields = ["author", "body"];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  return errors;
};

class CommentEditModalDetail extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
      error={Boolean(touched && error)}
      label={label}
      id="margin-none"
      helperText={touched && error ? "Required" : null}
      fullWidth
      {...input}
      {...custom}
    />
  );

  renderTextFieldMultiline = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      error={Boolean(touched && error)}
      helperText={touched && error ? "Required" : null}
      label={label}
      id="margin-none"
      fullWidth
      multiline
      {...input}
      {...custom}
    />
  );

  render() {
    const {
      classes,
      initialValues,
      pristine,
      submitting,
      reset,
      handleSubmit,
      putEditComment
    } = this.props;

    return (
      <div>
        <IconButton
          onClick={this.handleOpen}
          className={classes.button}
          id={initialValues.id}
        >
          <TooltipEdit className={classes.spacing} />
        </IconButton>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <form
              onSubmit={handleSubmit(cdata => {
                const { author, body } = cdata;
                cdata = { author, body };
                putEditComment(initialValues.id, cdata);
                this.handleClose();
              })}
            >
              <Grid container spacing={24}>
                <Grid item xs={12} align="left">
                  <Field
                    name="author"
                    component={this.renderTextField}
                    label="Author"
                  />
                </Grid>
                <Grid item xs={12} align="left">
                  <Field
                    name="body"
                    component={this.renderTextFieldMultiline}
                    label="Body"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button type="button" onClick={this.handleClose}>
                    Back
                  </Button>
                  <Button type="submit" disabled={pristine || submitting}>
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={8} align="right">
                  <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                  >
                    Clear Values
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

CommentEditModalDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  putEditComment
};

// https://github.com/erikras/redux-form/issues/603#issuecomment-295043224
// https://stackoverflow.com/questions/38881324/redux-form-initialvalues-not-updating-with-state
export default reduxForm({
  fields: ["text"],
  validate
})(
  connect(
    undefined,
    mapDispatchToProps
  )(withStyles(styles, { withTheme: true })(CommentEditModalDetail))
);
