import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 800
  },
  button: {
    margin: theme.spacing.unit
  }
});

class table extends Component {
  getDataCount = this.props.tableData.slice(0, this.props.tableData.length);

  componentDidUpdate() {
    if (this.props.tableData.length !== this.getDataCount.length) {
      alert("Delete Success");
    }
  }

  render() {
    const { classes, tableData, deleteData } = this.props;
    console.log(tableData.id);

    const rows = tableData.map((row, index) => {
      return (
        <TableBody key={index}>
          <TableCell>{row.name}</TableCell>
          <TableCell numeric>{row.job}</TableCell>
          <TableCell numeric>
            <Button
              onClick={deleteData(row.id)}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Delete
            </Button>
            <Button
              component={Link}
              to={`/edit/${row.id}`}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Update
            </Button>
          </TableCell>
        </TableBody>
      );
    });

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell numeric>Job</TableCell>
              <TableCell numeric>Action</TableCell>
            </TableRow>
          </TableHead>
          {rows}
        </Table>
      </Paper>
    );
  }
}

table.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(table);
